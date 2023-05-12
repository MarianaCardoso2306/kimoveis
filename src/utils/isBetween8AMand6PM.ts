const isBetween8AMand6PM = (hour: string): boolean => {
  const hourNumber: number = parseInt(hour.substring(0, 2));
  return hourNumber >= 8 && hourNumber <= 18;
};

export default isBetween8AMand6PM;
