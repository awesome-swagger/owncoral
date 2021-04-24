"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPanelUserInfo = exports.UserProfile = void 0;
const zod_1 = require("zod");
const address_1 = require("./address");
// Mostly matches franklin.user_self in /db/schema/user.sql
// We expand address into its own object
exports.UserProfile = zod_1.z.object({
    id: zod_1.z.string(),
    isAdmin: zod_1.z.boolean(),
    email: zod_1.z.string().email(),
    emailAlt: zod_1.z.string().email(),
    isVerifiedPrimary: zod_1.z.boolean(),
    isVerifiedAlt: zod_1.z.boolean(),
    legalFirst: zod_1.z.string(),
    legalLast: zod_1.z.string(),
    phone: zod_1.z.string(),
    phoneAlt: zod_1.z.string(),
    addressMailing: address_1.Address,
    addressResidency: address_1.Address,
    taxPayerId: zod_1.z.string(),
    is1099Eligible: zod_1.z.boolean(),
    completedAccreditation: zod_1.z.boolean(),
    birthDate: zod_1.z.string(),
});
exports.AdminPanelUserInfo = zod_1.z.object({
    id: zod_1.z.string(),
    email: zod_1.z.string().email().nullable(),
    displayName: zod_1.z.string().nullable(),
});
//# sourceMappingURL=user.js.map