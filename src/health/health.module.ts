import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './health.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { TerminusLogger } from './terminus-logger.service';

@Module({
  imports: [
    TerminusModule.forRoot({
      logger: TerminusLogger,
    }),
    TerminusModule.forRoot({
      logger: false,
      errorLogStyle: 'pretty',
      // https://docs.nestjs.com/recipes/terminus#graceful-shutdown-timeout
      gracefulShutdownTimeoutMs: 1000,
    }),
    HttpModule,
    PrismaModule
  ],
  controllers: [HealthController],
})
export class HealthModule {}