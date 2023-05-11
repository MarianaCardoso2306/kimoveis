import { NextFunction, Request, Response } from "express";
import { AppError } from "../../error";

const ensureUserIsAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { admin } = res.locals;

  if (!admin) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default ensureUserIsAdminMiddleware;
