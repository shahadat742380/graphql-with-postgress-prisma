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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express4_1 = require("@apollo/server/express4");
const express_1 = __importDefault(require("express"));
const graphql_1 = __importDefault(require("./graphql"));
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const PORT = Number(process.env.PORT) || 8000;
        app.use(express_1.default.json());
        app.get("/", (req, res) => {
            res.json({ message: "Server is up and running" });
        });
        const server = yield (0, graphql_1.default)();
        yield server.start();
        app.use("/graphql", (0, express4_1.expressMiddleware)(server));
        app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
    });
}
init().catch((error) => console.error("Error starting server:", error));
// docker run cmd: docker compose up -d
// docker stop cmd: docker compose stop
// Prisma migration: npx prisma migrate dev --name any_name_here
