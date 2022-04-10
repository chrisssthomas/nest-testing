import { User } from './users/entities/user.entity';
import { Injectable, ConflictException } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    //
  }
  async getUsers(): Promise<User[]> {
    throw new ConflictException();
  }
}
