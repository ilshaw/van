import { Global, Module } from "@nestjs/common";

import { ZapService } from "../services/zap.service";

@Global()
@Module({
    providers: [
        ZapService
    ],
    exports: [
        ZapService
    ]
})
export class ZapModule {}