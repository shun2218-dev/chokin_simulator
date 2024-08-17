import dayjs from 'dayjs';
import { afterUnitN } from './afterUnitN';

describe('afterUnitN', () => {
  describe('when the n is 2', () => {
    describe('and the unit is "year"', () => {
      it('should return 731 which is equaled 2 years later amount of days(from 2001-01-01)', () => {
        expect(afterUnitN(2, 'year', dayjs('20001-01-01'))).toBe(730);
      });

      it('should return 732 which is equaled 2 years later amount of days contained leap year(from 2000-01-01)', () => {
        expect(afterUnitN(2, 'year', dayjs('2000-01-01'))).toBe(731);
      });
    });

    describe('and the unit is "month"', () => {
      it('should return 59 which is equaled 2 months later amount of days(from 2001-01-01)', () => {
        expect(afterUnitN(2, 'month', dayjs('20001-01-01'))).toBe(59);
      });

      it('should return 61 which is equaled 2 months later amount of days contained leap year(from 2001-04-01)', () => {
        expect(afterUnitN(2, 'month', dayjs('2001-04-01'))).toBe(61);
      });
    });

    describe('and the unit is "week"', () => {
      it('should return 14 which is equaled 2 weeks later amount of days(from 2001-01-01)', () => {
        expect(afterUnitN(2, 'week', dayjs('20001-01-01'))).toBe(14);
      });
    });

    describe('and the unit is "day"', () => {
      it('should return 2 which is equaled 2 days later amount of days(from 2001-01-01)', () => {
        expect(afterUnitN(2, 'day', dayjs('20001-01-01'))).toBe(2);
      });
    });
  });
});
