import { BaseDatabase } from "../BaseDatabase";
import { ProductDatabase } from "../ProductDatabase";
import { CartDatabase } from "../CartDatabase";
import { allProducts } from "./data";

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
    DROP TABLE IF EXISTS ${ProductDatabase.TABLE_PURCHASES};
    DROP TABLE IF EXISTS ${ProductDatabase.TABLE_PRODUCTS};
    DROP TABLE IF EXISTS ${CartDatabase.TABLE_CART};
        
      CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_PRODUCTS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
            price DOUBLE(4,2) NOT NULL,
            qty_stock INT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS ${CartDatabase.TABLE_CART}(
            id_cart VARCHAR(255) PRIMARY KEY,
            client_name VARCHAR(255) NOT NULL,
            delivery_date DATE NOT NULL,
            total DOUBLE(10,2) NOT NULL DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_PURCHASES}(
            id_purchase VARCHAR(255) PRIMARY KEY,
            id_cart VARCHAR(255) NOT NULL,
            id_product VARCHAR(255) NOT NULL,
            quantity INT NOT NULL,
            price DOUBLE(4,2) NOT NULL,
            FOREIGN KEY (id_cart) REFERENCES ${CartDatabase.TABLE_CART}(id_cart),
            FOREIGN KEY (id_product) REFERENCES ${ProductDatabase.TABLE_PRODUCTS}(id)
        );
        `);
  };

  insertData = async () => {
    await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS).insert(
      allProducts
    );
  };
}

const migrations = new Migrations();
migrations.execute();
