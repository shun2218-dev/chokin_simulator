import dayjs from 'dayjs';

export const oneWeekLater = (): number => {
  const today = dayjs();
  const afterOneWeek = today.add(1, 'week');
  return afterOneWeek.diff(today, 'day');
};
