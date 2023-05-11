import { Repository } from "typeorm";
import { RealEstate, Schedule, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import {
  isMonday,
  isFriday,
  isTuesday,
  isWednesday,
  isThursday,
} from "date-fns";
import { AppError } from "../../error";
import { IScheduleRequest } from "../../interfaces/schedules.interfaces";

const isBetween8AMand6PM = (hour: string): boolean => {
  const hourNumber: number = parseInt(hour.substring(0, 2));
  return hourNumber >= 8 && hourNumber <= 18;
};

const isValidDate = (dateString: string): boolean => {
  const date: Date = new Date(dateString);
  const dayOfWeek: number = date.getDay();
  return (
    isMonday(date) ||
    isTuesday(date) ||
    isWednesday(date) ||
    isThursday(date) ||
    isFriday(date)
  );
};

const createSchedulesService = async (
  scheduleData: IScheduleRequest,
  userId: number,
  realEstateId: number
): Promise<string> => {
  if (!isBetween8AMand6PM(scheduleData.hour)) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }
  if (!isValidDate(scheduleData.date)) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const existingUserSchedule: Schedule | null = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.userId = :userId", { userId })
    .andWhere("schedule.date = :date", { date: scheduleData.date })
    .andWhere("schedule.hour = :hour", { hour: scheduleData.hour })
    .getOne();
  if (existingUserSchedule) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  const existingRealEstateSchedule: Schedule | null = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.realEstateId = :realEstateId", { realEstateId })
    .andWhere("schedule.date = :date", { date: scheduleData.date })
    .andWhere("schedule.hour = :hour", { hour: scheduleData.hour })
    .getOne();
  if (existingRealEstateSchedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }

  const realEstate: RealEstate | null = await realEstateRepository.findOneBy({
    id: realEstateId,
  });

  const user: User | null = await userRepository.findOneBy({ id: userId });

  const schedule: Schedule = scheduleRepository.create({
    ...scheduleData,
    user: user!,
    realEstate: realEstate!,
  });

  await scheduleRepository.save(schedule);

  const message: string = "Schedule created";

  return message;
};

export default createSchedulesService;
