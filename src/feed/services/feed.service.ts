import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewFeedDto } from '../dto/new-feed.input';
import { Feed } from '../schema/feed.schema';

@Injectable()
export class FeedService {
  constructor(@InjectModel(Feed.name) private readonly feedModel: Model<Feed>) {}

  async createFeed(newFeedDto: NewFeedDto): Promise<Feed> {
    const feedData = new this.feedModel({
      writer: newFeedDto.writer,
      title: newFeedDto.title,
      content: newFeedDto.content,
      creationDate: new Date(),
      comments: [],
    });

    return feedData.save();
  }
}
