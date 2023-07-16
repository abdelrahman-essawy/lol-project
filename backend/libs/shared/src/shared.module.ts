import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { EnvironmentModule } from './environment/environment.module';

@Module({
  providers: [SharedService],
  exports: [SharedService],
  imports: [EnvironmentModule],
})
export class SharedModule {}
