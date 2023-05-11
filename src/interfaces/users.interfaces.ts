import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaUpdateResponse,
  usersSchemaResponse,
} from "../schemas/users.schemas";
import { DeepPartial } from "typeorm";

type IUser = z.infer<typeof userSchema>;

type IUserRequest = z.infer<typeof userSchemaRequest>;

type IUserResponse = z.infer<typeof userSchemaResponse>;

type IUsersResponse = z.infer<typeof usersSchemaResponse>;

type IUserUpdateRequest = DeepPartial<IUserRequest>;

type IUserUpdateResponse = z.infer<typeof userSchemaUpdateResponse>;

export {
  IUser,
  IUserRequest,
  IUserResponse,
  IUsersResponse,
  IUserUpdateRequest,
  IUserUpdateResponse,
};
