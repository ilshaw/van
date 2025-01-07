import { Injectable } from "@nestjs/common";

@Injectable()
export class ZapService {
    public getGreeting(name: string) {
        return `Hello from ${name}!?`;
    }
}