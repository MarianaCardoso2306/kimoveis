import {
  IUserResponse,
  IUserUpdateRequest,
} from "../../interfaces/users.interfaces";
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schemas";

const updateUsersService = async (
  userData: IUserUpdateRequest,
  oldUserData: User
): Promise<IUserResponse> => {
  delete userData.admin;
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const newUserData: User = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  const newUserDataValid: IUserResponse = userSchemaResponse.parse(newUserData);

  await userRepository.save(newUserData);
  return newUserDataValid;
};

export default updateUsersService;
