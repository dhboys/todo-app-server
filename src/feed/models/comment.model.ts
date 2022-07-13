import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'comment' })
export class Comment {
  // @Field()
  // _id: string;

  @Field()
  writer: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  content?: string;

  @Field()
  creationDate: Date;
}
