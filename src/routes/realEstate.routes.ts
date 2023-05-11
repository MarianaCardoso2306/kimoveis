import { Router } from "express";
import {
  createRealEstatesController,
  listRealEstatesController,
} from "../controllers/realEstates.controllers";
import ensureTokenIsValidMiddleware from "../middlewares/users.middlewares/ensureTokenIsValid.middleware";
import ensureUserIsAdminMiddleware from "../middlewares/users.middlewares/ensureUserIsAdm.middleware";
import ensureBodyIsValidMiddleware from "../middlewares/users.middlewares/ensureBodyIsValid.middleware";
import { realEstateSchemaRequest } from "../schemas/realEstates.schema";

const realEstateRoutes: Router = Router();

realEstateRoutes.post(
  "",
  ensureBodyIsValidMiddleware(realEstateSchemaRequest),
  ensureTokenIsValidMiddleware,
  ensureUserIsAdminMiddleware,
  createRealEstatesController
);

realEstateRoutes.get("", listRealEstatesController);

export default realEstateRoutes;
