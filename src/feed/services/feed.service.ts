import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewFeedDto } from '../dto/new-feed.input';
import { Feed } from '../schema/feed.schema';

@Injectable()
export class FeedService {
  constructor(@InjectModel(Feed.name) private readonly feedModel: Model<Feed>) {}

  async getAllFeeds(): Promise<Feed[]> {
    return await this.feedModel.find().exec();
  }

  async getFeedById(id: string): Promise<Feed> {
    const feed = await this.feedModel.findOne({ _id: id }).exec();
    if (!feed) {
      throw new NotFoundException(`Feed ${id} not found`);
    }
    return feed;
  }

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

  async removeFeedById(id: string) {
    const feed = await this.feedModel.findOne({ _id: id }).exec();
    return feed.remove();
  }
}
