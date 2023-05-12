import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { ILoginRequest } from "../../interfaces/login.interfaces";

const createSessionService = async (
  userLogin: ILoginRequest
): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const userEmail: string = userLogin.email;

  const user: User | null = await userRepository.findOneBy({
    email: userEmail,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordVerify = await compare(userLogin.password, user.password);

  if (!passwordVerify) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign({ admin: user.admin }, process.env.SECRET_KEY!, {
    expiresIn: "24h",
    subject: user.id.toString(),
  });

  return token;
};

export default createSessionService;
