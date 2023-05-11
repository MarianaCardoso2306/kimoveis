import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import usersRoutes from "./routes/users.routes";
import { handleErrors } from "./error";
import loginRoutes from "./routes/login.routes";
import categoriesRoutes from "./routes/categories.routes";
import realEstateRoutes from "./routes/realEstate.routes";
import schedulesRoutes from "./routes/schedules.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoriesRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", schedulesRoutes);

app.use(handleErrors);

export default app;
