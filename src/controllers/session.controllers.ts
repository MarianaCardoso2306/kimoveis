import { Request, Response } from "express";
import { ILoginRequest } from "../interfaces/login.interfaces";
import createSessionService from "../services/login/createSessionService";

const createSessionController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userLogin: ILoginRequest = req.body;

  const token = await createSessionService(userLogin);
  return res.json({ token });
};

export { createSessionController };
