import { NextFunction, Request, Response } from "express";
import { AppError } from "../../error";

const ensureUserIsAdminForPatchMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { admin } = res.locals;
  const { userId } = res.locals;
  const idReq = req.params.id;

  if (!admin && userId !== idReq) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default ensureUserIsAdminForPatchMiddleware;
