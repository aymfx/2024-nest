import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}
  @Get()
  getUser(): string {
    return '获取到了一个用户';
  }
}
