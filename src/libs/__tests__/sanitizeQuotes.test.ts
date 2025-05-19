import { sanitizeQuotes } from "../sanitizeQuotes";

describe('sanitizeQuotes', () => {
    it('escapes ampersands, less-than, and greater-than', () => {
        expect(sanitizeQuotes('5 > 3 & 2 < 4')).toBe('5 &gt; 3 &amp; 2 &lt; 4');
    });

    it('leaves apostrophes and quotes untouched', () => {
        expect(sanitizeQuotes(`It's "great"`)).toBe(`It's "great"`);
    });

    it('handles mixed input', () => {
        expect(sanitizeQuotes(`Tom & Jerry's <adventure> "rocks"`))
        .toBe('Tom &amp; Jerry\'s &lt;adventure&gt; "rocks"');
    });

    it('returns empty string if input is empty', () => {
        expect(sanitizeQuotes('')).toBe('');
    });
});