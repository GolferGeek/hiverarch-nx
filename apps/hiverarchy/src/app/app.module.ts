// src/app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from '../users/users.service';
import { UsersResolver } from '../users/users.resolver';
import { UsersModule } from '../users/users.module';
import { databaseProviders } from '../database/database.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    UsersModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UsersService,
    UsersResolver,
    ...databaseProviders,
  ],
})
export class AppModule {}
