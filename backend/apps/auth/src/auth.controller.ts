import { Controller } from '@nestjs/common'
import { AuthService } from './auth.service'
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices'

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth')
  getUser(@Payload() data: any, @Ctx() context: RmqContext): Promise<any> {
    // returbn the message sent and ack

    const channel = context.getChannelRef()
    const message = context.getMessage()

    console.log('data', data)

    channel.ack(message)

    return data
  }
}
