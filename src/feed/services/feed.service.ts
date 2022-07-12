import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewFeed } from '../dto/new-feed.dto';
import { Feed } from '../models/feed.model';
import { FeedDocument } from '../schema/feed.schema';

@Injectable()
export class FeedService {
  constructor(@InjectModel(Feed.name) private readonly feedModel: Model<FeedDocument>) {}

  async createFeed(newFeed: NewFeed): Promise<Feed> {
    const feedData = new this.feedModel({
      writer: newFeed.writer,
      title: newFeed.title,
      content: newFeed.content,
      creationDate: new Date(),
      comments: [],
    });

    return feedData.save();
  }
}
