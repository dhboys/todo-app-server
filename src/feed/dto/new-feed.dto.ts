import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString, MaxLength } from 'class-validator';

@InputType()
export class NewFeed {
  @Field()
  @IsString()
  writer: string;

  @Field()
  @MaxLength(30)
  @IsString()
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(500)
  @IsString()
  content?: string;
}
