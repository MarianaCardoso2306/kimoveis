import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { ICategoriesResponse } from "../../interfaces/categories.interfaces";
import { categoriesSchemaResponse } from "../../schemas/categories.schemas";

const listCategoriesService = async (): Promise<ICategoriesResponse> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories: Category[] = await categoryRepository.find();
  const newCategories: ICategoriesResponse =
    categoriesSchemaResponse.parse(categories);

  return newCategories;
};

export default listCategoriesService;
