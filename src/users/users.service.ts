import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractCrudService } from '../common/services/abstract-crud.service';
import { User } from './user.entity';

@Injectable()
export class UsersService extends AbstractCrudService<User, number> {
  constructor(
    @InjectRepository(User)
    protected _userRepository: Repository<User>
  ) {
    super(_userRepository);
  }
}
