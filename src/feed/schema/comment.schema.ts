import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema({ timestamps: true })
export class Comment {
  @Prop({ type: String })
  writer: string;

  @Prop({ type: String })
  password: string;

  @Prop({ type: String })
  content?: string;

  @Prop({ type: Date })
  creationDate: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
