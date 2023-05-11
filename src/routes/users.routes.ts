import { Router } from "express";
import ensureBodyIsValidMiddleware from "../middlewares/users.middlewares/ensureBodyIsValid.middleware";
import {
  createUsersController,
  deleteUsersController,
  listUsersController,
  updateUsersController,
} from "../controllers/users.controllers";
import {
  userSchemaRequest,
  userSchemaUpdateRequest,
} from "../schemas/users.schemas";
import ensureEmailAlreadyExisteMiddleware from "../middlewares/users.middlewares/ensureEmailAlreadyExists.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/users.middlewares/ensureTokenIsValid.middleware";
import ensureUserIsAdmin from "../middlewares/users.middlewares/ensureUserIsAdm.middleware";
import ensureUserExistsMiddleware from "../middlewares/users.middlewares/ensureUserExists.middleware";
import ensureUserIsAdminForPatchMiddleware from "../middlewares/users.middlewares/ensureUserIsAdminForPatch.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureEmailAlreadyExisteMiddleware,
  ensureBodyIsValidMiddleware(userSchemaRequest),
  createUsersController
);
usersRoutes.get(
  "",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdmin,
  listUsersController
);
usersRoutes.patch(
  "/:id",
  ensureUserExistsMiddleware,
  ensureBodyIsValidMiddleware(userSchemaUpdateRequest),
  ensureTokenIsValidMiddleware,
  ensureUserIsAdminForPatchMiddleware,
  updateUsersController
);
usersRoutes.delete(
  "/:id",
  ensureUserExistsMiddleware,
  ensureTokenIsValidMiddleware,
  ensureUserIsAdmin,
  deleteUsersController
);

export default usersRoutes;
