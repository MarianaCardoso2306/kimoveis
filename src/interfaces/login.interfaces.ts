import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";

type ILoginRequest = z.infer<typeof loginSchema>;

export { ILoginRequest };
