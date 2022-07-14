import { InputType, Field, PartialType } from '@nestjs/graphql';
import { NewFeedDto } from './new-feed.input';

@InputType()
export class UpdateFeedDto extends PartialType(NewFeedDto) {
  @Field(() => String)
  _id: string;
}
