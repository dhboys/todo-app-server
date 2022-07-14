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

  // TODO : 나중에 comment type dto 작업해서 바꿔주기
  @Field(() => [Object], { nullable: true })
  @IsOptional()
  comments?: any;
}
