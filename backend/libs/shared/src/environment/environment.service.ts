import { Injectable } from '@nestjs/common';
import { Environment } from 'libs/shared/@types';

@Injectable()
export class EnvironmentService {
  static getEnvironment(): Environment {
    return {
      RABBITMQ_DEFAULT_USER: process.env.RABBITMQ_DEFAULT_USER,
      RABBITMQ_DEFAULT_PASS: process.env.RABBITMQ_DEFAULT_PASS,
      RABBITMQ_USER: process.env.RABBITMQ_USER,
      RABBITMQ_PASS: process.env.RABBITMQ_PASS,
      RABBITMQ_HOST: process.env.RABBITMQ_HOST,
      RABBITMQ_AUTH_QUEUE: process.env.RABBITMQ_AUTH_QUEUE,
      POSTGRES_USER: process.env.POSTGRES_USER,
      POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
      POSTGRES_DB: process.env.POSTGRES_DB,
      POSTGRES_URI: process.env.POSTGRES_URI,
      PGADMIN_DEFAULT_EMAIL: process.env.PGADMIN_DEFAULT_EMAIL,
      PGADMIN_DEFAULT_PASSWORD: process.env.PGADMIN_DEFAULT_PASSWORD,
      JWT_SECRET: process.env.JWT_SECRET,
      REDIS_PASS: process.env.REDIS_PASS,
      REDIS_URI: process.env.REDIS_URI,
    };
  }
}
