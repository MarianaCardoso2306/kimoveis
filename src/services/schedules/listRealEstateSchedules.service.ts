import { Repository } from "typeorm";
import { RealEstate, Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";

import { AppError } from "../../error";

const listRealEstateSchedulesService = async (
  realEstateId: number
): Promise<RealEstate> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstate: RealEstate | null = await realEstateRepository
    .createQueryBuilder("realEstate")
    .innerJoinAndSelect("realEstate.address", "address")
    .innerJoinAndSelect("realEstate.category", "category")
    .leftJoinAndSelect("realEstate.schedules", "schedules")
    .leftJoinAndSelect("schedules.user", "user")
    .where("realEstate.id = :realEstateId", { realEstateId })
    .getOne();

  if (!realEstate) {
    throw new AppError("RealEstate not found", 404);
  }
  return realEstate;
};

export default listRealEstateSchedulesService;
