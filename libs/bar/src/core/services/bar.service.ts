import { Injectable } from "@nestjs/common";

@Injectable()
export class BarService {
    public getGreeting(name: string) {
        return `Hello from ${name}!?`;
    }
}