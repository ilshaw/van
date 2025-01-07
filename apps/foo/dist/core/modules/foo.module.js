"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooModule = void 0;
const common_1 = require("@nestjs/common");
const bar_1 = require("bar");
const foo_controller_1 = require("../controllers/foo.controller");
let FooModule = class FooModule {
};
exports.FooModule = FooModule;
exports.FooModule = FooModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        controllers: [
            foo_controller_1.FooController
        ],
        imports: [
            bar_1.BarModule
        ]
    })
], FooModule);
//# sourceMappingURL=foo.module.js.map