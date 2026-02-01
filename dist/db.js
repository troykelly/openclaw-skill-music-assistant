import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { loadConfig } from "./config.js";
export function makePrisma() {
    const cfg = loadConfig();
    const adapter = new PrismaBetterSqlite3({
        url: cfg.databaseUrl,
    });
    return new PrismaClient({ adapter });
}
export { PrismaClient };
//# sourceMappingURL=db.js.map