import { app } from "./app";
import { BaseDataBase } from "./data/BaseDataBase";
import { userEndpoint } from "./endpoints/userEndpoint";

/* app.get("/showtables", async (req, res) => {
  const base = new BaseDataBase();
  const show = await base.getConnection().raw(`SHOW TABLES`);
  res.send(show);
}); */

const newUser = new userEndpoint();

app.post("/user/signup", newUser.create);
app.get("/user/login", newUser.login);
app.get("/user/profile", newUser.getByIdProfile);
app.delete("/user/deletebyId", newUser.delById);
app.get("/user/byId", newUser.getByIdToken);