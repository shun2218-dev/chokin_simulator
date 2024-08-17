import dayjs from 'dayjs';
import { calculatePerMonth } from './calculatePerMonth';

describe('calculatePerMonth', () => {
  describe('when targetAmount is 10000', () => {
    describe('and duration is 1', () => {
      it('should return 310000(2000-01-01)', () => {
        expect(calculatePerMonth(1, 10000, dayjs('2000-01-01'))).toBe(310000);
      });
    });

    describe('and duration is 7', () => {
      it('should return 44285.71(2000-01-01)', () => {
        expect(calculatePerMonth(7, 10000, dayjs('2000-01-01'))).toBe(44285.71);
      });
    });

    describe('and duration is 31', () => {
      it('should return 10000(2000-01-01)', () => {
        expect(calculatePerMonth(31, 10000, dayjs('2000-01-01'))).toBe(10000);
      });
    });

    describe('and duration is 365', () => {
      it('should return 849.32(2000-01-01)', () => {
        expect(calculatePerMonth(365, 10000, dayjs('2000-01-01'))).toBe(849.32);
      });
    });
  });
});
