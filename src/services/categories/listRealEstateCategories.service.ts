import { Repository } from "typeorm";
import { Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { ICategory } from "../../interfaces/categories.interfaces";
import { AppError } from "../../error";

const listRealEstateCategoriesService = async (
  categoryId: number
): Promise<ICategory> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const category: Category | null = await categoryRepository.findOne({
    where: {
      id: categoryId,
    },
    relations: {
      realEstate: true,
    },
  });
  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

export default listRealEstateCategoriesService;
