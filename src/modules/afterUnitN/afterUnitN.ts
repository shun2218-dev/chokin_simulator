import { Unit } from '@/types';
import dayjs from 'dayjs';

/**
 * return a number of days which is 'from' 'n' 'unit' later
 * @param {number} n a number of later('unit')
 * @param {Unit} unit unit of 'n'
 * @param {dayjs.Dayjs} [from=dayjs()] date of reference
 * @returns {number} after a number of 'n' 'unit' days 'from'
 */
export const afterUnitN = (n: number, unit: Unit, from: dayjs.Dayjs = dayjs()): number => {
  const nLaterUnit = from.add(n, unit);
  return nLaterUnit.diff(from, 'day');
};
