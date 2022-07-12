import { FeedService } from './../services/feed.service';
import { Module } from '@nestjs/common';
import { FeedResolver } from 'src/feed/resolvers/feed.resolver';

@Module({
  providers: [FeedResolver, FeedService],
})
export class FeedModule {}
