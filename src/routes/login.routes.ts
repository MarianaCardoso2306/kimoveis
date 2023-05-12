import { Router } from "express";
import { createSessionController } from "../controllers/session.controllers";
import ensureBodyIsValidMiddleware from "../middlewares/users.middlewares/ensureBodyIsValid.middleware";
import { loginSchema } from "../schemas/login.schema";

const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  ensureBodyIsValidMiddleware(loginSchema),
  createSessionController
);

export default loginRoutes;
