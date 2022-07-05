"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const setup_swagger_1 = require("./common/swagger/setup-swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, setup_swagger_1.setupSwagger)(app);
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map