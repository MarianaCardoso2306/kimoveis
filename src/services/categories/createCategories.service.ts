import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import {
  ICategory,
  ICategoryRequest,
} from "../../interfaces/categories.interfaces";
import { categorySchema } from "../../schemas/categories.schemas";

const createCategoriesService = async (
  categoryData: ICategoryRequest
): Promise<ICategory> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category = categoryRepository.create(categoryData);

  await categoryRepository.save(category);

  const newCategoryData: ICategory = categorySchema.parse(category);

  return newCategoryData;
};

export default createCategoriesService;
