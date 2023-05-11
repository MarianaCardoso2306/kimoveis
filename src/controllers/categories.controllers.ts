import { Request, Response } from "express";
import {
  ICategoriesResponse,
  ICategory,
  ICategoryRequest,
} from "../interfaces/categories.interfaces";
import createCategoriesService from "../services/categories/createCategories.service";
import listCategoriesService from "../services/categories/listCategories.service";
import listRealEstateCategoriesService from "../services/categories/listRealEstateCategories.service";
// import listRealEstateCategoriesService from "../services/categories/listRealEstateCategories.service";

const createCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryData: ICategoryRequest = req.body;

  const category: ICategory = await createCategoriesService(categoryData);
  return res.status(201).json(category);
};

const listCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories: ICategoriesResponse = await listCategoriesService();
  return res.json(categories);
};

const listRealEstateCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryId: number = parseInt(req.params.id);
  const categories: ICategory = await listRealEstateCategoriesService(
    categoryId
  );
  return res.json(categories);
};

export {
  createCategoriesController,
  listCategoriesController,
  listRealEstateCategoriesController,
};
