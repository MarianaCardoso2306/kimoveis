import { z } from "zod";
import {
  adressesSchema,
  adressesWihtoutIdSchema,
} from "../schemas/adressess.schema";

type IAdress = z.infer<typeof adressesSchema>;

type IAdressRequest = z.infer<typeof adressesWihtoutIdSchema>;

export { IAdress, IAdressRequest };
