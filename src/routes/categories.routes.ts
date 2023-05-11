import { Router } from "express";
import ensureBodyIsValidMiddleware from "../middlewares/users.middlewares/ensureBodyIsValid.middleware";
import { categorySchemaRequest } from "../schemas/categories.schemas";
import ensureTokenIsValidMiddleware from "../middlewares/users.middlewares/ensureTokenIsValid.middleware";
import ensureUserIsAdminMiddleware from "../middlewares/users.middlewares/ensureUserIsAdm.middleware";
import {
  createCategoriesController,
  listCategoriesController,
  listRealEstateCategoriesController,
} from "../controllers/categories.controllers";
import ensureCategoryNameAlreadyExistsMiddleware from "../middlewares/categories.middlewares/ensreCategoryNameAlreadyExists.middleware";

const categoriesRoutes: Router = Router();

categoriesRoutes.post(
  "",
  ensureBodyIsValidMiddleware(categorySchemaRequest),
  ensureTokenIsValidMiddleware,
  ensureUserIsAdminMiddleware,
  ensureCategoryNameAlreadyExistsMiddleware,
  createCategoriesController
);
categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id/realEstate", listRealEstateCategoriesController);

export default categoriesRoutes;
