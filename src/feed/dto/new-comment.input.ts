import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, MaxLength, MinLength } from 'class-validator';

@InputType()
export class NewCommentDto {
  @Field(() => String)
  writer: string;

  @Field(() => String)
  @MinLength(4)
  password: string;

  @Field(() => String)
  @IsOptional()
  @MaxLength(500)
  content?: string;
}
