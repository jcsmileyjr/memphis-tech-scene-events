import { getMonthAndDay } from '../getMonthAndDay';

describe('getMonthAndDay', () => {
    it('returns correct month and day for a valid date', () => {
        expect(getMonthAndDay('May 20, 2025')).toBe('May 20');
        expect(getMonthAndDay('Dec 1, 2025')).toBe('Dec 1');
    });

    it('handles single-digit days', () => {
        expect(getMonthAndDay('June 5, 2025')).toBe('June 5');
    });

    it('returns TBD for invalid date', () => {
        expect(getMonthAndDay('invalid-date')).toBe('TBD');
        expect(getMonthAndDay('')).toBe('TBD');
    });
});