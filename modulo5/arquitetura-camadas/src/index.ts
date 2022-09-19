import { app } from "./controller/app";
import { UserController } from "./controller/UserController";
import { pingRouter } from './router/pingRouter'
import { userRouter } from './router/userRouter'

const userController = new UserController()

app.use("/ping", pingRouter)
app.use("/users", userRouter)
app.post("/users/signup", userController.create)
app.post("/users/login", userController.login)
app.get("/users/all", userController.getAll)