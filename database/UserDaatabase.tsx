
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";


export const createUserDB = async (db: SQLiteDatabase) => {
      //
    console.log("Creating database");
    try {
          // Create a table
        const response = await db.execAsync(
        `
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            firstName TEXT NOT NULL,
            email TEXT NOT NULL,
            faculty TEXT NOT NULL,
            career TEXT ,
            active INTEGER NOT NULL DEFAULT 0
        );
        `
        );
        console.log("Database created user", response);
    } catch (error) {
        console.error("Error creating database:", error);
    }
};
