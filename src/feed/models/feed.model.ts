import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { Comment } from './comment.model';

@ObjectType({ description: 'feed' })
export class Feed {
  @Field()
  _id: string;

  @Field()
  writer: string;

  @Directive('@upper')
  @Field()
  title: string;

  @Field({ nullable: true })
  content?: string;

  @Field()
  creationDate: Date;

  @Field(() => [Comment], { nullable: true })
  comments: [Comment] | [];
}
