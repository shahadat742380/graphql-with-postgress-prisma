"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const db_1 = require("../../lib/db");
const queries = {
    getUsers(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { limit }) {
            const users = yield db_1.prismaClient.user.findMany({
                take: limit || undefined,
            });
            return users;
        });
    },
    getUserById(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { id }) {
            const user = yield db_1.prismaClient.user.findUnique({
                where: { id },
            });
            return user;
        });
    },
};
const mutations = {
    createUser: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { firstName, lastName, email, password, }) {
        yield db_1.prismaClient.user.create({
            data: {
                firstName,
                lastName,
                email,
                password,
                salt: "random_salt",
            },
        });
        return true;
    }),
    deleteUser(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { id }) {
            yield db_1.prismaClient.user.delete({
                where: { id },
            });
            return true;
        });
    },
    updateUser(_1, _a) {
        return __awaiter(this, arguments, void 0, function* (_, { id, firstName, lastName, email, profileImageURL, }) {
            const updatedUser = yield db_1.prismaClient.user.update({
                where: { id },
                data: {
                    firstName,
                    lastName,
                    email,
                    profileImageURL,
                },
            });
            return updatedUser;
        });
    },
};
exports.resolvers = { queries, mutations };
