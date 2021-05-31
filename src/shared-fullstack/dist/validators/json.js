"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Json = void 0;
const zod_1 = require("zod");
const Literal = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean(), zod_1.z.null()]);
exports.Json = zod_1.z.lazy(() => zod_1.z.union([Literal, zod_1.z.array(exports.Json), zod_1.z.record(exports.Json)]));
//# sourceMappingURL=json.js.map