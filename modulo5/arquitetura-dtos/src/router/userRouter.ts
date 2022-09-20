import { Router } from "express";
import { UserController } from "../controller/UserController";

export const userRouter = Router();

const userController = new UserController();

// http://localhost:3003/users/signup
userRouter.post("/signup", userController.create);

// http://localhost:3003/users/login
userRouter.post("/login", userController.login);

// http://localhost:3003/users/
userRouter.get("/", userController.getAll);

// http://localhost:3003/users/:id
userRouter.delete("/:id", userController.deleteUser);

// http://localhost:3003/users/:id
userRouter.put("/:id", userController.editUser);
