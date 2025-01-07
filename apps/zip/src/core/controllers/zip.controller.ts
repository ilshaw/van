import { Controller, Get } from "@nestjs/common";

import { ZapService } from "@libs/zap";

@Controller("/")
export class ZipController {
    constructor(private readonly zapService: ZapService) {}

    @Get("/")
    public getGreeting() {
        return this.zapService.getGreeting("zip");
    }
}