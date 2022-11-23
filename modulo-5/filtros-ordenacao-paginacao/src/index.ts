import { app } from "./app";
import { getAllUsers } from "./endpoints/selectAllUsers";

app.get("/recipes", getAllUsers)