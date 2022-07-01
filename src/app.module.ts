import { FeedModule } from './models/feed.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [GraphQLModule.forRoot({
        typePaths: ['./**/*.graphql'],
    }),
    FeedModule
  ],
  
})
export class AppModule {}