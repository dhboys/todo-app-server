"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Nest API')
        .setDescription('Todo App Api Documentation')
        .setVersion('1.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'access-token')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('documentation', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
            defaultModelsExpandDepth: -1,
        },
    });
    console.info(`Documentation: http://localhost:${process.env.PORT}/documentation`);
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=setup-swagger.js.map