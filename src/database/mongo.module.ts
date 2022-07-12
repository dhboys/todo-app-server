import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigService,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb+srv://root:X5ZmQqFn77wjkiF@todo-cluster.xlrmv.mongodb.net/?retryWrites=true&w=majority`,
      }),
    }),
  ],
})
export class DatabaseModule {}
