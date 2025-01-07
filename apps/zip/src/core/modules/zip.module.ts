import { Global, Module } from "@nestjs/common";

import { ZapModule } from "zap";

import { ZipController } from "../controllers/zip.controller";

@Global()
@Module({
    controllers: [
        ZipController
    ],
    imports: [
        ZapModule
    ]
})
export class ZipModule {}