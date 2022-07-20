import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewFeedDto } from '../dto/new-feed.input';
import { UpdateFeedDto } from '../dto/update-feed.input';
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
  findOne(@Args('feed_id', { type: () => String }) id: string) {
    return this.feedService.getFeedById(id);
  }

  @Mutation((returns) => Feed, { name: 'addFeed' })
  async addFeed(@Args('newFeedDto') newFeedDto: NewFeedDto): Promise<Feed> {
    const feed = await this.feedService.createFeed(newFeedDto);
    pubSub.publish('feedAdded', { feedAdded: feed });
    return feed;
  }

  @Mutation((returns) => Feed, { name: 'updateFeed' })
  async updateFeed(@Args('updateFeedDto') updateFeedDto: UpdateFeedDto): Promise<Feed> {
    const feed = await this.feedService.updateFeedById(updateFeedDto);
    pubSub.publish('feedUpdated', { feedUpdated: feed });
    return feed;
  }

  @Mutation((returns) => Feed, { name: 'removeFeed' })
  async removeFeed(@Args('feed_id', { type: () => String }) id: string) {
    const feed = await this.feedService.removeFeedById(id);
    if (feed) return true;
    else return false;
  }

  @Mutation(() => [Feed], { name: 'removeAll' })
  async removeAll() {
    const result = await this.feedService.removeAllFeeds();
    return result;
  }
}
