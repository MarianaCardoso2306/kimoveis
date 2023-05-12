import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const ensureBodyIsValidMiddleware =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const validatedData = schema.parse(req.body);
    return next();
  };

export default ensureBodyIsValidMiddleware;
