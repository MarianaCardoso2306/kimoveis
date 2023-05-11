import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";

import { AppError } from "../../error";

const deleteUsersService = async (user: User): Promise<void> => {
  if (user.deletedAt !== null) {
    throw new AppError("User has already been deleted", 409);
  }
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  await userRepository.softRemove(user);
};

export default deleteUsersService;
