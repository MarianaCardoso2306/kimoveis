import { Repository } from "typeorm";
import { Address, Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";

import { IRealEstateRequest } from "../../interfaces/realEstates.interfaces";
import { realEstateSchemaRequest } from "../../schemas/realEstates.schema";
import { AppError } from "../../error";
import { adressesWihtoutIdSchema } from "../../schemas/adressess.schema";
import { IAdressRequest } from "../../interfaces/adresses.interfaces";

const createRealEstatesService = async (
  realEstateData: IRealEstateRequest
): Promise<RealEstate> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categoryId: number = realEstateData.categoryId;

  const category: Category | null = await categoryRepository.findOneBy({
    id: categoryId,
  });
  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const addressData: IAdressRequest = realEstateData.address;

  const existingAddress = await addressRepository.findOne({
    where: {
      street: addressData.street,
      zipCode: addressData.zipCode,
      city: addressData.city,
      state: addressData.state,
      number: addressData.number ?? "",
    },
  });

  if (existingAddress) {
    throw new AppError("Address already exists", 409);
  }

  const addressVerify = adressesWihtoutIdSchema.parse(addressData);

  const address: Address = addressRepository.create(addressVerify);
  await addressRepository.save(address);

  const realEstateVerify = realEstateSchemaRequest.parse(realEstateData);
  const realEstate: RealEstate = realEstateRepository.create({
    ...realEstateVerify,
    category,
    address,
  });

  await realEstateRepository.save(realEstate);

  return realEstate;
};

export default createRealEstatesService;
