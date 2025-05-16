export function sanitizeQuotes(input: string): string {
    return input
      .replace(/&/g, '&amp;')   // Ampersand must be replaced first
      .replace(/</g, '&lt;')    // Escape less-than
      .replace(/>/g, '&gt;')   // Escape greater-than
      .replace(/'/g, '’')   // Apostrophe
      .replace(/"/g, '&quot;'); // Quotation mark
}