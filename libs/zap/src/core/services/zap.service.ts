import { Injectable } from "@nestjs/common";

@Injectable()
export class ZapService {
    public getGreeting(name: string) {
        return `Greeting from ${name}!!!`;
    }
}