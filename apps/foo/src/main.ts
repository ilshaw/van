import { FastifyAdapter } from "@nestjs/platform-fastify";
import { NestFactory } from "@nestjs/core";

import { FooModule } from "./core/modules/foo.module";

async function bootstrap() {
    const fastifyAdapter = new FastifyAdapter();

    const nestApplication = await NestFactory.create(FooModule, fastifyAdapter);

    return await nestApplication.listen(8080);
}

bootstrap();