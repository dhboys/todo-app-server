import { NewCommentDto } from './new-comment.input';
import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString, MaxLength } from 'class-validator';

@InputType()
export class NewFeedDto {
  @Field(() => String)
  @IsString()
  writer: string;

  @Field(() => String)
  @MaxLength(30)
  @IsString()
  title: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @MaxLength(500)
  @IsString()
  content?: string;

  @Field(() => [NewCommentDto], { nullable: true })
  @IsOptional()
  comments?: [NewCommentDto];
}
