import { z } from "zod";
import {
  scheduleSchema,
  scheduleSchemaRequest,
} from "../schemas/schedules.schema";

type ISchedule = z.infer<typeof scheduleSchema>;

type IScheduleRequest = z.infer<typeof scheduleSchemaRequest>;

export { ISchedule, IScheduleRequest };
