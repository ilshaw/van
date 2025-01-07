"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_fastify_1 = require("@nestjs/platform-fastify");
const core_1 = require("@nestjs/core");
const foo_module_1 = require("./core/modules/foo.module");
async function bootstrap() {
    const fastifyAdapter = new platform_fastify_1.FastifyAdapter();
    const nestApplication = await core_1.NestFactory.create(foo_module_1.FooModule, fastifyAdapter);
    return await nestApplication.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map