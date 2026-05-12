/**
 * Converts a 24-hour time string (e.g. "0:00", "13:30", "23:59")
 * into a 12-hour AM/PM string (e.g. "12:00 AM", "1:30 PM", "11:59 PM").
 *
 * @param {string} time24 - Time in "H:mm" or "HH:mm" format
 * @returns {string} - Time in "h:mm AM/PM" format, or original value if not parseable
 */
export function formatTo12h(time24) {
  if (!time24 || typeof time24 !== 'string') return time24 ?? '';

  const parts = time24.trim().split(':');
  if (parts.length < 2) return time24;

  const hour = parseInt(parts[0], 10);
  const minute = parts[1].padStart(2, '0');

  if (isNaN(hour) || isNaN(parseInt(minute, 10))) return time24;

  const period = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;

  return `${hour12}:${minute} ${period}`;
}
