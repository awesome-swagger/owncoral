const UTC_FORMATTER = new Intl.DateTimeFormat('en-us', {
  year: 'numeric',
  month: 'short',
  timeZone: 'UTC',
});

/**
 * Applies 'MMM yyyy' format to a UTC date.
 *
 * @param date
 */
export const formatUTCDateMMMyyyy = (date: Date) => {
  const { month, year } = Object.fromEntries(
    UTC_FORMATTER.formatToParts(date).map(({ type, value }) => [type, value]),
  );
  return `${month} ${year} `;
};
