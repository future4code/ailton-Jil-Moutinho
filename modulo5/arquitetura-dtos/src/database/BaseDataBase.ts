import knex, { Knex } from "knex"
import dotenv from "dotenv"
dotenv.config()

// classe molde , onde a funcao getConnection vai ser chamada pelas filhas
export abstract class BaseDataBase{

    private static connection:Knex | null = null
    static getConnection: any

    protected getConnection():Knex{
        if(!BaseDataBase.connection){
            BaseDataBase.connection = knex({
                client:"mysql",
                connection:{
                    port: 3306,
                    host:process.env.DB_HOST,
                    user:process.env.DB_USER,
                    password:process.env.DB_PASS,
                    database:process.env.DB_NAME,
                    multipleStatements: true
                }
            })
        }

        return BaseDataBase.connection
    }
}
