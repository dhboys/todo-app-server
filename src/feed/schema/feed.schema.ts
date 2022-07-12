import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Comment } from './comment.schema';

export type FeedDocument = Feed & Document;

@Schema({ timestamps: true })
export class Feed {
  @Prop({ type: String, required: true })
  writer: string;

  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: false })
  content?: string;

  @Prop({ type: Date, required: true })
  creationDate: Date;

  @Prop({ type: Comment, required: false })
  comments?: [Comment?];
}

export const FeedSchema = SchemaFactory.createForClass(Feed);
