import { sanitizeQuotes } from "../sanitizeQuotes";

describe('sanitizeQuotes', () => {
    it('escapes ampersands, less-than, and greater-than', () => {
        expect(sanitizeQuotes('5 > 3 & 2 < 4')).toBe('5 &gt; 3 &amp; 2 &lt; 4');
    });

    it('ensures apostrophes and quotes do not break HTML', () => {
        expect(sanitizeQuotes(`It's "great"`)).toBe(`It’s &quot;great&quot;`);
    });

    const expectedOutput = `Tom &amp; Jerry’s &lt;adventure&gt; &quot;rocks&quot;`;
    it('handles mixed input & not break HTML', () => {
        expect(sanitizeQuotes(`Tom & Jerry's <adventure> "rocks"`))
        .toBe(expectedOutput);
    });

    it('returns empty string if input is empty', () => {
        expect(sanitizeQuotes('')).toBe('');
    });
});