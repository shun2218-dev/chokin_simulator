import dayjs from 'dayjs';

export const oneMonthLater = (): number => {
  const today = dayjs();
  const afterOneMonth = today.add(1, 'month');
  return afterOneMonth.diff(today, 'day');
};
