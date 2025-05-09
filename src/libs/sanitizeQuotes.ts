export function sanitizeQuotes(input: string): string {
    return input
      .replace(/&/g, '&amp;')   // Ampersand must be replaced first
      .replace(/'/g, '&#39;')   // Apostrophe
      .replace(/"/g, '&quot;'); // Quotation mark
  }