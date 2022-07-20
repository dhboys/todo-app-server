import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Document } from 'mongoose';
import { Comment } from './comment.schema';

export type FeedDocument = Feed & Document;
@ObjectType()
@Schema({ timestamps: true })
export class Feed {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ type: String, required: true })
  writer: string;

  @Field(() => String)
  @Prop({ type: String, required: true })
  title: string;

  @Field(() => String)
  @Prop({ type: String, required: false })
  content?: string;

  @Field(() => Date)
  @Prop({ type: Date, required: true })
  creationDate: Date;

  @Field(() => [Comment])
  @Prop({ type: Array<Comment>, required: false })
  comments?: [Comment] | [];
}

export const FeedSchema = SchemaFactory.createForClass(Feed);
