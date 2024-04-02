import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { CatsModule } from './cats/cats.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { RecipesModule } from './recipes/recipes.module';
import { HealthModule } from './health/health.module';
import { NestConfigModule } from '@core/config';
import { NestPinoModule } from '@core/pino';

@Module({
  imports: [
    NestConfigModule,
    NestPinoModule,
    CoreModule,
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: 'schema.gql',
      subscription: true,
      graphiql: true,
    }),
    RecipesModule,
    CatsModule,
    UserModule,
    PostModule,
    HealthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
