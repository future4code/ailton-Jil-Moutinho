import { app } from "./app";
import { createProduct } from "./endpoints/createProductsEnd";
import { createUser } from "./endpoints/createUserEnd";
import { selectAllProductsEnd } from "./endpoints/selectAllProductsEnd";
import { selectAllUsersEnd } from "./endpoints/selectAllUserEnd";
import connectionTest from "./endpoints/testConnection";

app.get("/connectionTest", connectionTest);

app.post("/users", createUser);

app.get("/users", selectAllUsersEnd);

app.post("/products", createProduct);

app.get("/products/", selectAllProductsEnd);
