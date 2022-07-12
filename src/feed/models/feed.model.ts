import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { Comment } from './comment.model';

@ObjectType({ description: 'feed' })
export class Feed {
  @Field()
  _id: string;

  @Field()
  writer: string;

  @Directive('@upper')
  title: string;

  @Field({ nullable: true })
  content?: string;

  @Field()
  creationDate: Date;

  @Field({ nullable: true })
  comments?: [Comment?];
}
