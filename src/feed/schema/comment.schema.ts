import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@ObjectType({ description: 'comment' })
@Schema({ timestamps: true })
export class Comment {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ type: String })
  writer: string;

  @Field(() => String)
  @Prop({ type: String })
  password: string;

  @Field(() => String)
  @Prop({ type: String })
  content?: string;

  @Field(() => Date)
  @Prop({ type: Date })
  creationDate: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
