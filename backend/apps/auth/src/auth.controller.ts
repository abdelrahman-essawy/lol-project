import { Controller } from '@nestjs/common'
import { AuthService } from './auth.service'
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices'

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth')
  async getUser(@Ctx() context: RmqContext): Promise<any> {
    const channel = context.getChannelRef()
    const message = context.getMessage()

    return message
  }
}
