import dayjs from 'dayjs';

export const oneYearLater = (): number => {
  const today = dayjs();
  const afterOneYear = today.add(1, 'year');
  return afterOneYear.diff(today, 'day');
};
