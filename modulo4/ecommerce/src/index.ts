import { app } from "./app";
import { selectPurchasesByUserEnd } from "./endpoints/selectPurchasesByUserEnd";
import { createProduct } from "./endpoints/createProductsEnd";
import { createPurchase } from "./endpoints/createPurchase";
import { createUser } from "./endpoints/createUserEnd";
import { selectAllProductsEnd } from "./endpoints/selectAllProductsEnd";
import { selectAllUsersEnd } from "./endpoints/selectAllUserEnd";
import connectionTest from "./endpoints/testConnection";
import { selectAllUsersWithPurchaseEnd } from "./endpoints/selectAllUsersWithPurchaseEnd";

app.get("/connectionTest", connectionTest);

app.post("/users", createUser);

app.get("/users", selectAllUsersEnd);

app.post("/products", createProduct);

app.get("/products/", selectAllProductsEnd);

app.post("/purchase", createPurchase);

app.get("/users/:user_id/purchases", selectPurchasesByUserEnd);

app.get("/usersPurchases", selectAllUsersWithPurchaseEnd);