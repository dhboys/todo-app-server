import { Module } from '@nestjs/common';
import { FeedModule } from './feed/modules/feed.module';
import { DatabaseModule } from './database/mongo.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [CommonModule, DatabaseModule, FeedModule],
})
export class AppModule {}
