import { BarService } from "bar";
export declare class FooController {
    private readonly barService;
    constructor(barService: BarService);
    getGreeting(): string;
}
