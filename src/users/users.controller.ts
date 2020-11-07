import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { AbstractCrudController } from '../common/controllers/abstract-crud.controller';

@Controller('users')
export class UsersController extends AbstractCrudController<User, number> {
  constructor(protected _userService: UsersService) {
    super(_userService);
  }
}
