import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { FeedModule } from './feed/modules/feed.module';
import { DatabaseModule } from './database/mongo.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: '../feed.graphql',
      debug: true,
      playground: true,
    }),
    CommonModule,
    DatabaseModule,
    FeedModule,
  ],
})
export class AppModule {}
