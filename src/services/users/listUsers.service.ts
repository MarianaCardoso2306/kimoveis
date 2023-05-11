import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { IUsersResponse } from "../../interfaces/users.interfaces";
import { usersSchemaResponse } from "../../schemas/users.schemas";

const listUsersService = async (): Promise<IUsersResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] = await userRepository.find();
  const newUsers: IUsersResponse = usersSchemaResponse.parse(users);

  return newUsers;
};

export default listUsersService;
