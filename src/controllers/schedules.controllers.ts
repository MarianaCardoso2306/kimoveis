import { Request, Response } from "express";
import {
  IRealEstate,
  IRealEstateRequest,
  IRealEstatesResponse,
} from "../interfaces/realEstates.interfaces";
import createRealEstatesService from "../services/realEstates/createRealEstates.service";
import { RealEstate } from "../entities";
import listRealEstatesService from "../services/realEstates/listRealEstates.service";
import createSchedulesService from "../services/schedules/createSchedules.service";
import { IScheduleRequest } from "../interfaces/schedules.interfaces";
import listRealEstateSchedulesService from "../services/schedules/listRealEstateSchedules.service";
import { realEstateSchema } from "../schemas/realEstates.schema";

const createSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const scheduleData: IScheduleRequest = req.body;
  const userId: number = res.locals.userId;
  const realEstateId: number = req.body.realEstateId;

  const message = await createSchedulesService(
    scheduleData,
    userId,
    realEstateId
  );
  return res.status(201).json({ message });
};

const listRealEstateSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstateId: number = parseInt(req.params.id);
  const realEstate = await listRealEstateSchedulesService(realEstateId);

  return res.json(realEstate);
};

export { createSchedulesController, listRealEstateSchedulesController };
