import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address, AddressInput } from 'src/address/address.entity';
import { Province, ProvinceInput } from 'src/address/province.entity';
import { Repository } from 'typeorm';
// import { CandidateBulkInput } from './args/bulk.input';
import { CandidateInput, CandidateUpdateInput } from './args/candidate.input';
import { Candidate, AllCandidatesResponse } from './candidate.entity';
import { bulk } from './jnoble_candidate_100';

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

  async findAll(take: number, skip?: number): Promise<AllCandidatesResponse> {
    if (skip) {
      const [items, count] = await this.candidateRepository.findAndCount({
        relations: ['address', 'address.province'],
        take,
        skip,
      });
      return { items, count };
    } else if (!skip) {
      const [items, count] = await this.candidateRepository.findAndCount({
        relations: ['address', 'address.province'],
        take,
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

  async findById(id: number): Promise<Candidate> {
    return await this.candidateRepository.findOne(id, {
      relations: ['address', 'address.province'],
    });
  }

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
    province?: ProvinceInput,
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

  async bulkAdd(): Promise<Candidate[]> {
    const addedCandidates = [];

    for (const candidate of bulk) {
      const {
        first_name,
        last_name,
        middle_name,
        date_of_birth,
        job_title,
        phone,
        email,
        languages,
        skills,
        valid_drivers_license,
        own_vehicle,
        status_in_canada,
        available,
        province,
        ...address
      } = candidate;

      const cand = await this.candidateRepository.findOne({ email });

      if (cand) {
        const lang = [];
        const sk = [];

        const updateInput = {
          firstName: first_name,
          lastName: last_name,
          middleName: middle_name,
          preferredName: null,
          dateOfBirth: date_of_birth,
          jobTitle: job_title,
          phone,
          languages: lang.concat(languages),
          skills: sk.concat(skills),
          validDriversLicense: valid_drivers_license,
          ownVehicle: own_vehicle,
          statusInCanada: status_in_canada,
          available: available ? available : true,
          address: {
            address1: address.address_1,
            address2: null,
            city: address.city,
            postalCode: address.postal_code,
            country: address.country,
          },
        };

        const prov = {
          name: province,
        };

        const updatedCand = await this.updateCandidate(
          cand.id,
          updateInput,
          prov,
        );

        addedCandidates.push(updatedCand);
      } else {
        const lang = [];
        const sk = [];

        const candInput = {
          firstName: first_name,
          lastName: last_name,
          middleName: middle_name,
          preferredName: null,
          dateOfBirth: date_of_birth,
          jobTitle: job_title,
          phone,
          email,
          languages: lang.concat(languages),
          skills: sk.concat(skills),
          validDriversLicense: valid_drivers_license,
          ownVehicle: own_vehicle,
          statusInCanada: status_in_canada,
          available: available ? available : true,
        };

        const addressInput = {
          address1: address.address_1,
          address2: null,
          city: address.city,
          postalCode: address.postal_code,
          country: address.country,
        };

        const prov = {
          name: province,
        };

        const addedCand = await this.addCandidate(
          candInput,
          addressInput,
          prov,
        );

        addedCandidates.push(addedCand);
      }
    }

    return addedCandidates;
  }
}
