import { z } from "zod";
import { adressesSchema, adressesWihtoutIdSchema } from "./adressess.schema";

const realEstateSchema = z.object({
  id: z.number(),
  value: z.union([z.number(), z.string()]).default(0),
  size: z.number().int().min(1, "Number must be greater than 0"),
  address: adressesWihtoutIdSchema,
  categoryId: z.number().int(),
  sold: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const realEstateSchemaRequest = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
});

const realEstateSchemaResponse = z.object({
  id: z.number(),
  value: z.union([z.number(), z.string()]).default(0),
  size: z.number().int().min(1, "Number must be greater than 0"),
  address: adressesSchema,
  categoryId: z.number().int(),
  sold: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const realEstatesSchemaResponse = z.array(
  realEstateSchemaResponse.omit({ categoryId: true })
);

export { realEstateSchema, realEstateSchemaRequest, realEstatesSchemaResponse };
