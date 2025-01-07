import { Global, Module } from "@nestjs/common";

import { BarService } from "../services/bar.service";

@Global()
@Module({
    providers: [
        BarService
    ],
    exports: [
        BarService
    ]
})
export class BarModule {}