import dayjs from 'dayjs';

/**
 * return amount of money per Month on a daily basis
 * @param {number} duration a number of days duration
 * @param {number} targetAmount the target which is amount of money
 * @param {dayjs.Dayjs} [from=dayjs()] date of reference
 * @returns amount of money per Month on a daily basis
 */
export const calculatePerMonth = (
  duration: number,
  targetAmount: number,
  from: dayjs.Dayjs = dayjs(),
): number => {
  const perDay = targetAmount / duration;
  const oneMonthLater = from.add(1, 'month');
  return Math.round(perDay * oneMonthLater.diff(from, 'day') * 100) / 100;
};
