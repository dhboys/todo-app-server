import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FeedModule } from './feed/models/feed.module';
import { DatabaseModule } from './database/mongo.module';
import { SharedModule } from './common/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: '../feed.graphql',
    }),
    SharedModule,
    FeedModule,
    DatabaseModule,
  ],
})
export class AppModule {}
