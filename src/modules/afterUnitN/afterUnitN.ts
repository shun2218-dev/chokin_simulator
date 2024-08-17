import { Unit } from '@/types';
import dayjs from 'dayjs';

export const afterUnitN = (n: number, unit: Unit, from = dayjs()) => {
  const nLaterUnit = from.add(n, unit);
  return nLaterUnit.diff(from, 'day');
};
