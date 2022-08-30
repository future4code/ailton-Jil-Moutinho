import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsersEnd";
import { getUserByName } from "./endpoints/getUserByName";
import { getUsersPage } from "./endpoints/getUsersByPage";
import { getUserByType } from "./endpoints/getUsersByTypeEnd";
import { getUsersOrdered } from "./endpoints/getUsersOrderedEnd";
import {getUsersAllFilters} from "./endpoints/getUserAllFilters"

app.get("/users", getAllUsers);

app.get("/userName", getUserByName);

app.get("/usersByType/:searchType", getUserByType);

app.get("/usersOrdered", getUsersOrdered);

app.get("/usersPage/:page", getUsersPage);

app.get("/usersFilters/", getUsersAllFilters)