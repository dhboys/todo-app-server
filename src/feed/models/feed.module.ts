import { Module } from '@nestjs/common';
import { FeedResolver } from 'src/feed/resolver/feed.resolver';

@Module({
  providers: [FeedResolver],
})
export class FeedModule {}
