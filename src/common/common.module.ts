import { GraphqlModule } from './graphql/graphql.module';
import { Global, Module } from '@nestjs/common';
import { ConfigShared } from './services/config.shared';

//전역에서 공유되는 공통 서비스들을 묶어놓은 모듈
const providers = [ConfigShared, GraphqlModule];
@Global()
@Module({
  providers,
  exports: [...providers],
})
export class CommonModule {}
