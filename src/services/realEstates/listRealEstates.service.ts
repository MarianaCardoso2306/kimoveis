import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { IRealEstatesResponse } from "../../interfaces/realEstates.interfaces";
import { realEstatesSchemaResponse } from "../../schemas/realEstates.schema";
import { AppDataSource } from "../../data-source";

const listRealEstatesService = async (): Promise<IRealEstatesResponse> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstates: RealEstate[] = await realEstateRepository.find({
    relations: {
      address: true,
    },
  });

  const realEstatesVerify: IRealEstatesResponse =
    realEstatesSchemaResponse.parse(realEstates);

  return realEstatesVerify;
};

export default listRealEstatesService;
