import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewFeedDto } from '../dto/new-feed.input';
import { Feed } from '../schema/feed.schema';
import { FeedService } from '../services/feed.service';

const pubSub = new PubSub();

@Resolver((of) => Feed)
export class FeedResolver {
  constructor(private readonly feedService: FeedService) {}

  @Query(() => [Feed], { name: 'feeds' })
  findAll() {
    return this.feedService.getAllFeeds();
  }

  @Query(() => Feed, { name: 'feed' })
  findOne(@Args('feed_id') id: string) {
    return this.feedService.getFeedById(id);
  }

  @Mutation((returns) => Feed, { name: 'addFeed' })
  async addFeed(@Args('newFeedDto') newFeedDto: NewFeedDto): Promise<Feed> {
    const feed = await this.feedService.createFeed(newFeedDto);
    pubSub.publish('feedAdded', { feedAdded: feed });
    return feed;
  }
}
