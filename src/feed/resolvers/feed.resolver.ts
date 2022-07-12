import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Feed } from '../models/feed.model';
import { PubSub } from 'graphql-subscriptions';
import { NewFeed } from '../dto/new-feed.dto';
import { FeedService } from '../services/feed.service';

const pubSub = new PubSub();

@Resolver((of) => Feed)
export class FeedResolver {
  constructor(private readonly feedService: FeedService) {}

  @Mutation((returns) => Feed)
  async addRecipe(@Args('newFeedData') newRecipeData: NewFeed): Promise<Feed> {
    const recipe = await this.feedService.createFeed(newRecipeData);
    pubSub.publish('recipeAdded', { recipeAdded: recipe });
    return recipe;
  }
}
