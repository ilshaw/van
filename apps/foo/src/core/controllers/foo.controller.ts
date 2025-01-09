import { Controller, Get } from "@nestjs/common";

import { BarService } from "bar";

@Controller("/")
export class FooController {
    constructor(private readonly barService: BarService) {}

    @Get("/")
    public getGreeting() {
        return this.barService.getGreeting("fooo");
    }
}