import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address, AddressInput } from 'src/address/address.entity';
import { Province, ProvinceInput } from 'src/address/province.entity';
import { Repository } from 'typeorm';
import { CandidateBulkInput } from './args/bulk.input';
import { CandidateInput } from './args/candidate.input';
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

    return await this.candidateRepository.save({
      ...candidate,
      address: addy,
    });
  }

  async bulkAdd(bulkInput: CandidateBulkInput[]): Promise<Candidate[]> {
    const addedCandidates = [];

    for (const candidate of bulkInput) {
      // there has to be a better way to do this
      // don't have time right now though LOL
      const c = {
        firstName: candidate.first_name,
        lastName: candidate.last_name,
        otherNames: candidate.other_names,
        phone: candidate.phone,
        email: candidate.email,
        languages: candidate.languages,
        skills: candidate.skills,
        ownVehicle: candidate.own_vehicle,
        statusInCanada: candidate.status_in_canada,
        statusExpiry: candidate.status_expiry,
        healthCardNumber: candidate.health_card_number,
        medicalInformation: candidate.medical_information,
      };

      const a = {
        address1: candidate.address_1,
        address2: candidate.address_2,
        city: candidate.city,
        postalCode: candidate.postal_code,
        country: candidate.country,
      };

      const p = {
        name: candidate.province,
      };

      const all = await this.findAll(null);

      for (const x in all) {
        await this.candidateRepository.delete(x);
      }

      const added = await this.addCandidate(c, a, p);

      addedCandidates.push(added);
    }

    return addedCandidates;
  }
}
