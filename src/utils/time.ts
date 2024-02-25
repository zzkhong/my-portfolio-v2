export function getDayOfWeek(): number {
  const today = new Date();
  const dayOfWeek = today.getDay() - 1;

  return dayOfWeek < 0 ? 0 : dayOfWeek;
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}
