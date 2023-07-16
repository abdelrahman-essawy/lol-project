import { ClientProxy } from '@nestjs/microservices'
import { Controller, Get, Inject } from '@nestjs/common'

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: ClientProxy,
  ) {
    console.log('this.authService', authService)
  }

  @Get()
  async getHello(): Promise<any> {
    return this.authService.send('auth', {
      email: 'test@test.com',
    })
  }
}
