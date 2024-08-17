import { Unit } from '@/types';
import dayjs from 'dayjs';

export const afterUnitN = (n: number, unit: Unit) => {
  const today = dayjs();
  const nLaterUnit = today.add(n, unit);
  return nLaterUnit.diff(today, 'day');
};
