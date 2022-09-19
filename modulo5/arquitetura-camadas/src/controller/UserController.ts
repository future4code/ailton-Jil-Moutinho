import { strictEqual } from "assert";
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDataBase } from "../database/UserDataBase";
import { MissingFields } from "../error/MissingFields";
import { UserCoBu } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export class UserController {

    async create(req: Request, res: Response) {
        try {
            const { name, email, password, role } = req.body

            const userBussines = new UserBusiness()

            const user:UserCoBu = {
                name,
                email,
                password,
                role
            }

            const messageAndToken =  await userBussines.create(user)

            res.status(201).send({ message:messageAndToken })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }

    async login(req: Request, res: Response){
        try {
            const { email,password} = req.body

            const userBusiness = new UserBusiness()

            const token =  await userBusiness.login(email,password)

            res.status(201).send({ message:token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || error.sqlMessage })
        }
    }

    async getAll(req: Request, res: Response){
        try {
            let { nameSearch } = req.body
            const tokenUser = req.headers.authorization as string
            
            const userBusiness = new UserBusiness()
            
            const userProfile =  await userBusiness.getAllUsers(tokenUser, nameSearch)

            res.status(201).send({ User:userProfile })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message || error.sqlMessage})
        }
    }
}