import { z } from "zod";

const scheduleSchema = z.object({
  id: z.number(),
  hour: z.string(),
  date: z.string(),
  realEstateId: z.number(),
});

const scheduleSchemaRequest = scheduleSchema.omit({ id: true });

const scheduleSchemaResponse = scheduleSchema.omit({
  id: true,
  realEstateId: true,
  userId: true,
});

export { scheduleSchema, scheduleSchemaRequest, scheduleSchemaResponse };
