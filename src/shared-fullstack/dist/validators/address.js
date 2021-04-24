"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const zod_1 = require("zod");
// Mostly matches /db/schema/address.sql
exports.Address = zod_1.z.object({
    line1: zod_1.z.string().nonempty(),
    line2: zod_1.z.string().nullable(),
    line3: zod_1.z.string().nullable(),
    cityLocality: zod_1.z.string(),
    stateRegion: zod_1.z.string(),
    postalCode: zod_1.z.string(),
    country: zod_1.z.string(),
});
//# sourceMappingURL=address.js.map