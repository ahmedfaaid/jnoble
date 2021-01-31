import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address, AddressInput } from 'src/address/address.entity';
import { Province, ProvinceInput } from 'src/address/province.entity';
import { Repository } from 'typeorm';
import { CandidateInput, CandidateUpdateInput } from './args/candidate.input';
import { Candidate, AllCandidatesResponse } from './candidate.entity';

@Injectable()
export class CandidateService {
  constructor(
    @InjectRepository(Candidate)
    private readonly candidateRepository: Repository<Candidate>,
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
  ) {}

  async findAll(skip?: number): Promise<AllCandidatesResponse> {
    if (skip) {
      const [items, count] = await this.candidateRepository.findAndCount({
        relations: ['address', 'address.province'],
        take: 10,
        skip,
      });
      return { items, count };
    } else if (!skip) {
      const [items, count] = await this.candidateRepository.findAndCount({
        relations: ['address', 'address.province'],
        take: 10,
      });
      return { items, count };
    }
  }

  async findByName(input: string): Promise<Candidate[]> {
    return await this.candidateRepository.find({
      where: [{ firstName: input }, { lastName: input }, { otherNames: input }],
      relations: ['address', 'address.province'],
    });
  }

  async findByEmail(input: string): Promise<Candidate> {
    return await this.candidateRepository.findOne({
      where: { email: input },
      relations: ['address', 'address.province'],
    });
  }

  // TODO: add findById function

  async addCandidate(
    candidate: CandidateInput,
    address: AddressInput,
    province: ProvinceInput,
  ): Promise<Candidate> {
    const prov = await this.provinceRepository.findOne({
      where: { name: province.name },
    });

    const addy = await this.addressRepository.save({
      ...address,
      province: prov,
    });

    const cand = await this.candidateRepository.save({
      ...candidate,
      address: addy,
    });

    await this.addressRepository.save({ ...addy, candidate: cand });

    return cand;
  }

  async updateCandidate(
    id: number,
    input: CandidateUpdateInput,
    province: ProvinceInput,
  ): Promise<Candidate> {
    let prov;

    const candidate = await this.candidateRepository.findOne(id, {
      relations: ['address', 'address.province'],
    });

    if (province) {
      prov = await this.provinceRepository.findOne({
        where: { name: province.name },
      });
    }

    if ('address' in input) {
      const { address, ...cand } = input;

      await this.addressRepository.update(candidate.address.id, {
        ...address,
        province: prov,
      });

      await this.candidateRepository.update(id, {
        ...cand,
        address: candidate.address,
      });
    } else {
      await this.candidateRepository.update(id, {
        ...(input as CandidateUpdateInput),
      });
    }

    return await this.candidateRepository.findOne(id, {
      relations: ['address', 'address.province'],
    });
  }
}
