import { NextFunction, Request, Response } from "express";
import { RealEstate } from "../../entities";
import { AppError } from "../../error";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { IScheduleRequest } from "../../interfaces/schedules.interfaces";

const ensureRealEstateExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const scheduleData: IScheduleRequest = req.body;

  const realEstateRespository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const realEstate: RealEstate | null = await realEstateRespository.findOneBy({
    id: scheduleData.realEstateId,
  });

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  return next();
};

export default ensureRealEstateExistsMiddleware;
