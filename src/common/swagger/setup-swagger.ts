import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('Todo App Api Documentation')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('documentation', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      defaultModelsExpandDepth: -1,
    },
  });

  console.info(`Documentation: http://localhost:${process.env.PORT}/documentation`);
}
