import { Injectable } from '@nestjs/common';
@Injectable()
export class UserService {
  getUser() {
    return '获取到了一个用户';
  }
}
