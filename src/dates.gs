/**
 * Formats a UTC datetime, adjusting for a timezone and accounting for DST.
 *
 * The provided datetime is adjusted for the provided timezone and formatted
 * according to the provided format. Daylight saving time _is_ accounted for.
 *
 * This function is based on the following Stack Overflow answer and
 * conversations with ChatGPT. No code or documentation was taken from ChatGPT
 * verbatim.
 *
 * https://stackoverflow.com/a/40324587/715866
 *
 * @param {string} utcDatetime - A UTC datetime (e.g., "2025-07-09T02:56:23Z").
 * @param {string} timezone - The timezone that the datetime should be adjusted
 *   to (e.g., "America/New_York").
 * @param {string} format - The format that the returned string should adhere
 *   to, as a Google Sheets date-time format pattern (e.g.,
 *   "yyyy-MM-dd HH:mm:ss").
 *
 * @returns {string} The formatted UTC dateime, after being adjusted to the
 *   provided timezone and after accounting for daylight saving time.
 *
 * @throws {string} If the provided UTC datetime string cannot be parsed by
 *   JavaScript as a date.
 *
 * @customfunction
 *
 * @example
 * // Returns "2025-07-08 22:56:23"
 * =FORMAT_UTC("2025-07-09T02:56:23Z", "America/New_York", "yyyy-MM-dd HH:mm:ss")
 */
function FORMAT_UTC(utcDatetime, timezone, format) {
  const utcDate = new Date(utcDatetime);

  if(utcDate instanceof Date && !isNaN(utcDate)){
    return Utilities.formatDate(utcDate, timezone, format);
  } else {
    throw `The value "${utcDatetime}" cannot be parsed by JavaScript as a date`;
  }
}
