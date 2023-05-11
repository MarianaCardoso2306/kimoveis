import { z } from "zod";
import {
  realEstateSchema,
  realEstateSchemaRequest,
  realEstatesSchemaResponse,
} from "../schemas/realEstates.schema";

type IRealEstate = z.infer<typeof realEstateSchema>;

type IRealEstateRequest = z.infer<typeof realEstateSchemaRequest>;

type IRealEstatesResponse = z.infer<typeof realEstatesSchemaResponse>;

export { IRealEstate, IRealEstateRequest, IRealEstatesResponse };
