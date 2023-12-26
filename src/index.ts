const minutesMS = 60000;
const hoursMS = 3600000;
const daysMS = 86400000;

function validate(value: any) {
  if (isNaN(value)) throw new Error('Valor inválido.');
}

export function addMinutes(minutes: number, date?: Date) {
  const newDate = date ? new Date(date).getTime() : new Date().getTime();
  validate(minutes);
  const difference = minutes * minutesMS;
  return new Date(newDate + difference);
}

export function lessMinutes(minutes: number, date?: Date) {
  const newDate = date ? date.getTime() : new Date().getTime();
  validate(minutes);
  const difference = minutes * minutesMS;
  return new Date(newDate - difference);
}

export function addHours(hours: number, date?: Date) {
  const newDate = date ? date.getTime() : new Date().getTime();
  validate(hours);
  const difference = hours * hoursMS;
  return new Date(newDate + difference);
}

export function lessHours(hours: number, date?: Date) {
  const newDate = date ? date.getTime() : new Date().getTime();
  validate(hours);
  const difference = hours * hoursMS;
  return new Date(newDate - difference);
}

export function addDays(days: number, date?: Date) {
  const newDate = date ? date.getTime() : new Date().getTime();
  validate(days);
  const difference = days * daysMS;
  return new Date(newDate + difference);
}

export function lessDays(days: number, date?: Date) {
  const newDate = date ? date.getTime() : new Date().getTime();
  validate(days);
  const difference = days * daysMS;
  return new Date(newDate - difference);
}

export function addWeek(weeks: number, date?: Date) {
  validate(weeks);
  const newDate = date ? date : new Date();
  const countWeek = 7 * weeks;
  const updatedDate = newDate.setDate(newDate.getDate() + countWeek);
  return new Date(updatedDate);
}

export function lassWeek(weeks: number, date?: Date) {
  validate(weeks);
  const newDate = date ? date : new Date();
  const countWeek = 7 * weeks;
  const updatedDate = newDate.setDate(newDate.getDate() - countWeek);
  return new Date(updatedDate);
}

export function addmonths(months: number, date?: Date) {
  validate(months);
  const newDate = date ? date : new Date();
  const updatedDate = newDate.setMonth(newDate.getMonth() + months);
  return new Date(updatedDate);
}

export function lessmonths(months: number, date?: Date) {
  validate(months);
  const newDate = date ? date : new Date();
  const updatedDate = newDate.setMonth(newDate.getMonth() - months);
  return new Date(updatedDate);
}