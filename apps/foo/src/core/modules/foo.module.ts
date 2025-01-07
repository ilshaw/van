import { Global, Module } from "@nestjs/common";

import { BarModule } from "bar";

import { FooController } from "../controllers/foo.controller";

@Global()
@Module({
    controllers: [
        FooController
    ],
    imports: [
        BarModule
    ]
})
export class FooModule {}