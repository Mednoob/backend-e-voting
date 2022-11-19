import opt from "./config.json" assert { type: "json" };
import { Sequelize } from "sequelize";

const db = new Sequelize({
    dialect: "mysql",
    logging: false,
    ...opt
});

globalThis.db = db;

try {
    await db.authenticate();
    console.info("Berhasil terhubung ke database");
} catch (error) {
    console.error("Tidak dapat terhubung ke database:", error);
    process.exit(1);
}

import("./modules/server/index.js");
