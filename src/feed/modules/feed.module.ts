import { MongooseModule } from '@nestjs/mongoose';
import { FeedResolver } from 'src/feed/resolvers/feed.resolver';
import { FeedService } from './../services/feed.service';
import { Module } from '@nestjs/common';
import { Feed, FeedSchema } from '../schema/feed.schema';
import { DateScalar } from 'src/common/scalars/date.scalar';

@Module({
  imports: [MongooseModule.forFeature([{ name: Feed.name, schema: FeedSchema }])],
  providers: [FeedResolver, FeedService, DateScalar],
})
export class FeedModule {}
