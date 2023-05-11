import { z } from "zod";
import {
  categoriesSchemaResponse,
  categorySchema,
  categorySchemaRequest,
} from "../schemas/categories.schemas";

type ICategory = z.infer<typeof categorySchema>;

type ICategoryRequest = z.infer<typeof categorySchemaRequest>;

type ICategoriesResponse = z.infer<typeof categoriesSchemaResponse>;

export { ICategory, ICategoryRequest, ICategoriesResponse };
