import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";


export const createDbIfNeeded = async (db: SQLiteDatabase) => {
    //
    console.log("Creating database");
    try {
        // Create a table
        const response = await db.execAsync(
        `
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS eventslike (
            id INTEGER PRIMARY KEY,
            event_name TEXT NOT NULL,
            latitude REAL NOT NULL,
            longitude REAL NOT NULL,
            event_time TEXT NOT NULL,
            event_date TEXT NOT NULL,
            event_place TEXT NOT NULL
            ); 
        `
        );
        console.log("Database created", response);
    } catch (error) {
        console.error("Error creating database:", error);
    }
};
