import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { ClientProxyFactory, Transport } from '@nestjs/microservices'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'AUTH_SERVICE',
      useFactory: (configService: ConfigService) => {
        const USER = configService.get('RABBITMQ_USER')
        const PASSWORD = configService.get('RABBITMQ_PASS')
        const HOST = configService.get('RABBITMQ_HOST')
        const QUEUE_NAME = configService.get('RABBITMQ_AUTH_QUEUE')

        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://${USER}:${PASSWORD}@${HOST}`],
            // noAck: false,
            queue: QUEUE_NAME,
            queueOptions: {
              durable: true,
            },
            // prefetchCount: 1,
          },
        })
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
