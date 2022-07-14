import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Feed } from '../models/feed.model';
import { PubSub } from 'graphql-subscriptions';
import { NewFeed } from '../dto/new-feed.dto';
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
  async addFeed(
    @Args('writer') writer: string,
    @Args('title') title: string,
    @Args('content') content: string
  ): Promise<Feed> {
    const newFeedData: NewFeed = { writer: writer, title: title, content: content };
    const feed = await this.feedService.createFeed(newFeedData);
    pubSub.publish('feedAdded', { feedAdded: feed });
    return feed;
  }
}
