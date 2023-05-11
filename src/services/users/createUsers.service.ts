import { IUserRequest, IUserResponse } from "../../interfaces/users.interfaces";
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schemas";

const createUsersService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const newUserData: IUserResponse = userSchemaResponse.parse(user);

  return newUserData;
};

export default createUsersService;
