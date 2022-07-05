import { FeedModule } from './models/feed.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './**/*.graphql',
    }),
    FeedModule
  ],
})
// export class AppModule {}

export class AppModule {}
