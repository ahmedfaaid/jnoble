import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as argon from 'argon2';
import { Address, AddressInput } from 'src/address/address.entity';
import { Province, ProvinceInput } from 'src/address/province.entity';
import { SubUserInput } from 'src/sub-user/args/sub-user.input';
import {
  EmployerInput,
  EmployerUpdateInput,
} from 'src/employer/args/employer.input';
import { Employer } from './employer.entity';
import { SubUser } from 'src/sub-user/sub-user.entity';
import { Role } from 'src/lib/roles';

@Injectable()
export class EmployerService {
  constructor(
    @InjectRepository(Employer)
    private readonly employerRepository: Repository<Employer>,
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
    @InjectRepository(SubUser)
    private readonly subUserRepository: Repository<SubUser>,
  ) {}

  async findAll(): Promise<Employer[]> {
    return await this.employerRepository.find({
      relations: ['address', 'address.province', 'sub'],
    });
  }

  async findByName(input: string): Promise<Employer[]> {
    return await this.employerRepository.find({
      where: [
        { name: input },
        { sub: { firstName: input } },
        { sub: { lastName: input } },
      ],
      relations: ['address', 'address.province', 'sub'],
    });
  }

  async findByEmail(input: string): Promise<Employer> {
    return await this.employerRepository.findOne({
      where: [{ email: input }, { sub: { email: input } }],
      relations: ['address', 'address.province', 'sub'],
    });
  }

  async findById(id: number): Promise<Employer> {
    return await this.employerRepository.findOne(id, {
      relations: ['address', 'address.province', 'sub'],
    });
  }

  async addEmployer(
    subUser: SubUserInput,
    employer: EmployerInput,
    address: AddressInput,
    province: ProvinceInput,
  ): Promise<Employer> {
    const s = [];

    const hash = await argon.hash(subUser.password);

    const sub = await this.subUserRepository.save({
      ...subUser,
      password: hash,
      role: Role.ADMIN,
    });

    const prov = await this.provinceRepository.findOne({
      where: { name: province.name },
    });

    const addy = await this.addressRepository.save({
      ...address,
      province: prov,
    });

    const emp = await this.employerRepository.save({
      ...employer,
      address: addy,
      sub: s.concat(sub),
    });

    await this.addressRepository.save({ ...addy, employer: emp });

    return emp;
  }

  async updateEmployer(
    id: number,
    input: EmployerUpdateInput,
    province?: ProvinceInput,
  ): Promise<Employer> {
    let prov;

    const employer = await this.employerRepository.findOne(id, {
      relations: ['address', 'address.province', 'sub'],
    });

    if (province) {
      prov = await this.provinceRepository.findOne({
        where: { name: province.name },
      });
    }

    if ('address' in input) {
      const { address, ...emp } = input;

      await this.addressRepository.update(employer.address.id, {
        ...address,
        province: prov,
      });

      await this.employerRepository.update(id, {
        ...emp,
        address: employer.address,
      });
    } else {
      await this.employerRepository.update(id, {
        ...input,
      });
    }

    return await this.employerRepository.findOne(id, {
      relations: ['address', 'address.province', 'sub'],
    });
  }
}
