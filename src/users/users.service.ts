import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Profile)
    private readonly userRepository: Repository<Profile>,
  ) {}

  findAllUser(): Promise<Profile[]> {
    const query = 'SELECT * FROM profile';
    return this.userRepository.query(query);
  }
}
