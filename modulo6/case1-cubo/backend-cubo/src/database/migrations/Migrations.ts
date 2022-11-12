import { BaseDatabase } from "../BaseDatabase";
import { UserDatabase } from "../UserDatabase";
import { users } from "./data";

class Migrations extends BaseDatabase {
  execute = async () => {
    try {
      console.log("Creating tables...");
      await this.createTables();
      console.log("Tables created successfully.");

      console.log("Populating tables...");
      await this.insertData();
      console.log("Tables populated successfully.");

      console.log("Migrations completed.");
    } catch (error) {
      console.log("FAILED! Error in migrations...");
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      console.log("Ending connection...");
      BaseDatabase.connection.destroy();
      console.log("Connection closed graciously.");
    }
  };

  createTables = async () => {
    await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        
        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            nickname VARCHAR(255) UNIQUE NOT NULL,
            partnership INT NOT NULL,
            password VARCHAR(255) NOT NULL
            );
        `);
  };

  insertData = async () => {
    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(users);
  };
}

const migrations = new Migrations();
migrations.execute();
