import dayjs from 'dayjs';

export const calculatePerMonth = (duration: number, targetAmount: number): number => {
  const perDay = targetAmount / duration;
  const today = dayjs();
  const oneMonthLater = today.add(1, 'month');
  return Math.round(perDay * oneMonthLater.diff(today, 'day') * 100) / 100;
};
