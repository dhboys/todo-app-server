import { Module } from '@nestjs/common';
import { FeedModule } from './feed/modules/feed.module';
import { DatabaseModule } from './database/mongo.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    CommonModule,
    DatabaseModule,
    FeedModule,
  ],
})
export class AppModule {}
