import { Unit } from '@/types';
import dayjs from 'dayjs';

/**
 * return one 'unit' later a number of days 'from'
 * @param {Unit} unit unit of number
 * @param {dayjs.Dayjs} [from=dayjs()] date of reference
 * @returns a number of days 'from'
 */
export const oneUnitLater = (unit: Unit, from: dayjs.Dayjs = dayjs()): number => {
  const to = from.add(1, unit);
  return to.diff(from, 'day');
};
