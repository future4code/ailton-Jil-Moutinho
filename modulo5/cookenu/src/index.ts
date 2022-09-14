import { app } from "./app";
import { BaseDataBase } from "./data/BaseDataBase";
import { recipeEndpoint } from "./endpoints/recipeEndpoints";
import { userEndpoint } from "./endpoints/userEndpoint";

/* app.get("/showtables", async (req, res) => {
  const base = new BaseDataBase();
  const show = await base.getConnection().raw(`SHOW TABLES`);
  res.send(show);
}); */

const newUser = new userEndpoint();

app.post("/signup", newUser.create);
app.get("/login", newUser.login);
app.get("/user/profile", newUser.getByIdProfile);
app.get("/user/:user_id", newUser.getById);
//app.delete("/user/deletebyId", newUser.delById);

const newRecipe = new recipeEndpoint();

app.post("/recipe", newRecipe.create);
app.get("/recipe/:recipe_id", newRecipe.getById);
