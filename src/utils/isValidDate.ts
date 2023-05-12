import {
  isMonday,
  isFriday,
  isTuesday,
  isWednesday,
  isThursday,
} from "date-fns";

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

export default isValidDate;
