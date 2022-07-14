import { GraphqlModule } from './graphql/graphql.module';
import { Global, Module } from '@nestjs/common';
import { ConfigShared } from './services/config.shared';
import { ConfigModule } from '@nestjs/config';

//전역에서 공유되는 공통 서비스들을 묶어놓은 모듈
const providers = [ConfigShared, GraphqlModule];
@Global()
@Module({
  providers,
  exports: [
    ...providers,
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
  ],
})
export class CommonModule {}
