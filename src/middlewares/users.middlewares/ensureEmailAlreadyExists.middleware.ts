import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const ensureEmailAlreadyExisteMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userEmail: string = req.body.email;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepository.findOneBy({
    email: userEmail,
  });

  if (user !== null) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

export default ensureEmailAlreadyExisteMiddleware;
