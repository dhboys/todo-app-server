import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ConfigShared } from './common/services/config.shared';
import { SharedModule } from './common/shared.module';
import { setupSwagger } from './common/swagger/setup-swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  setupSwagger(app);
  await startServer(app);
}

const startServer = async (app: NestExpressApplication) => {
  const config = app.select(SharedModule).get(ConfigShared);

  await app.listen(config.APP.PORT);
  if (process.send) {
    console.info('[Process Ready] to pm2');
    process.send('ready');
  }
};
bootstrap();
