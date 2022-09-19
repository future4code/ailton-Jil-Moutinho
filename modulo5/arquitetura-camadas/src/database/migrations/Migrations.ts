import { BaseDataBase } from "../BaseDataBase"
import { UserDataBase } from "../UserDataBase"
import { users } from "./data"

class Migrations extends BaseDataBase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("Error in migrations...")
            console.log(error.message)
        } finally {
            console.log("Ending connection...")
            BaseDataBase.getConnection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDataBase.getConnection.raw(`
        DROP TABLE IF EXISTS ${UserDataBase.TABLE_USERS};
        
        CREATE TABLE IF NOT EXISTS ${UserDataBase.TABLE_USERS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
        );
        `)
    }

    insertData = async () => {
        await BaseDataBase
            .getConnection(UserDataBase.TABLE_USERS)
            .insert(users)
    }
}

const migrations = new Migrations()
migrations.execute()