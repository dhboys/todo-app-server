import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewFeedDto } from '../dto/new-feed.input';
import { Feed } from '../schema/feed.schema';
import { FeedService } from '../services/feed.service';

const pubSub = new PubSub();

@Resolver((of) => Feed)
export class FeedResolver {
  constructor(private readonly feedService: FeedService) {}

  @Query((returns) => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation((returns) => Feed, { description: 'feed' })
  async addFeed(@Args('newFeedDto') newFeedDto: NewFeedDto): Promise<Feed> {
    const feed = await this.feedService.createFeed(newFeedDto);
    pubSub.publish('feedAdded', { feedAdded: feed });
    return feed;
  }
}
