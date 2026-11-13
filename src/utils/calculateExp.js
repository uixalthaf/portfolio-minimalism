import { PROFILE } from "../configs/constants";

/**
 * Returns professional experience in decimal years, rounded to one decimal.
 * Uses UTC date-only values to avoid timezone-related day differences.
 */
export function calculateExp(
  startDate = PROFILE.experienceStartDate,
  currentDate = new Date(),
) {
  const start = new Date(`${startDate}T00:00:00.000Z`);
  const end = new Date(currentDate);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    throw new Error("calculateExp requires valid dates.");
  }

  const elapsedMilliseconds = Math.max(0, end.getTime() - start.getTime());
  const millisecondsPerYear = 365.2425 * 24 * 60 * 60 * 1000;

  return (elapsedMilliseconds / millisecondsPerYear).toFixed(1);
}