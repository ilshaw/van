import { FastifyAdapter } from "@nestjs/platform-fastify";
import { NestFactory } from "@nestjs/core";

import { ZipModule } from "./core/modules/zip.module";

async function bootstrap() {
    const fastifyAdapter = new FastifyAdapter();

    const nestApplication = await NestFactory.create(ZipModule, fastifyAdapter);

    return await nestApplication.listen(8000);
}

bootstrap();