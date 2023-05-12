import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const ensureCategoryNameAlreadyExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const categoryName = req.body.name;

  const categorRepository: Repository<Category> =
    AppDataSource.getRepository(Category);
  const category: Category | null = await categorRepository.findOneBy({
    name: categoryName,
  });

  if (category !== null) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};

export default ensureCategoryNameAlreadyExistsMiddleware;
