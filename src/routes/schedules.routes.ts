import { Router } from "express";
import {
  createSchedulesController,
  listRealEstateSchedulesController,
} from "../controllers/schedules.controllers";
import ensureBodyIsValidMiddleware from "../middlewares/users.middlewares/ensureBodyIsValid.middleware";
import { scheduleSchemaRequest } from "../schemas/schedules.schema";
import ensureTokenIsValidMiddleware from "../middlewares/users.middlewares/ensureTokenIsValid.middleware";
import ensureUserIsAdminMiddleware from "../middlewares/users.middlewares/ensureUserIsAdm.middleware";
import ensureRealEstateExistsMiddleware from "../middlewares/schedules.middlewares/ensureRealEstateExistis.middleware";

const schedulesRoutes: Router = Router();

schedulesRoutes.post(
  "",
  ensureTokenIsValidMiddleware,
  ensureBodyIsValidMiddleware(scheduleSchemaRequest),
  ensureRealEstateExistsMiddleware,
  createSchedulesController
);
schedulesRoutes.get(
  "/realEstate/:id",
  ensureTokenIsValidMiddleware,
  ensureUserIsAdminMiddleware,
  listRealEstateSchedulesController
);

export default schedulesRoutes;
