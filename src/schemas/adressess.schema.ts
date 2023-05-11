import { z } from "zod";

const adressesSchema = z.object({
  id: z.number(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional(),
  city: z.string().max(20),
  state: z.string().max(2),
});

const adressesWihtoutIdSchema = adressesSchema.omit({ id: true });

export { adressesSchema, adressesWihtoutIdSchema };
