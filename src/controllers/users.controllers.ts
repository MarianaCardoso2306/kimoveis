import { Request, Response } from "express";
import createUsersService from "../services/users/createUsers.service";
import listUsersService from "../services/users/listUsers.service";
import updateUsersService from "../services/users/updateUsers.service";
import {
  IUserRequest,
  IUserResponse,
  IUserUpdateRequest,
  IUsersResponse,
} from "../interfaces/users.interfaces";
import { User } from "../entities";
import deleteUsersService from "../services/users/deleteUsers.service";

const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: IUserRequest = req.body;

  const user: IUserResponse = await createUsersService(userData);
  return res.status(201).json(user);
};

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: IUsersResponse = await listUsersService();
  return res.json(users);
};

const updateUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: IUserUpdateRequest = req.body;
  const oldUserData: User = res.locals.user;
  const user: IUserResponse = await updateUsersService(userData, oldUserData);
  return res.status(200).json(user);
};

const deleteUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: User = res.locals.user;
  await deleteUsersService(user);
  return res.status(204).send();
};

export {
  createUsersController,
  listUsersController,
  updateUsersController,
  deleteUsersController,
};
