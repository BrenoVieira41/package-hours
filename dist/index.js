"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lessmonths = exports.addmonths = exports.lassWeek = exports.addWeek = exports.lessDays = exports.addDays = exports.lessHours = exports.addHours = exports.lessMinutes = exports.addMinutes = void 0;
const minutesMS = 60000;
const hoursMS = 3600000;
const daysMS = 86400000;
function validate(value) {
    if (isNaN(value))
        throw new Error('Valor inválido.');
}
function addMinutes(minutes, date) {
    const newDate = date ? new Date(date).getTime() : new Date().getTime();
    validate(minutes);
    const difference = minutes * minutesMS;
    return new Date(newDate + difference);
}
exports.addMinutes = addMinutes;
function lessMinutes(minutes, date) {
    const newDate = date ? date.getTime() : new Date().getTime();
    validate(minutes);
    const difference = minutes * minutesMS;
    return new Date(newDate - difference);
}
exports.lessMinutes = lessMinutes;
function addHours(hours, date) {
    const newDate = date ? date.getTime() : new Date().getTime();
    validate(hours);
    const difference = hours * hoursMS;
    return new Date(newDate + difference);
}
exports.addHours = addHours;
function lessHours(hours, date) {
    const newDate = date ? date.getTime() : new Date().getTime();
    validate(hours);
    const difference = hours * hoursMS;
    return new Date(newDate - difference);
}
exports.lessHours = lessHours;
function addDays(days, date) {
    const newDate = date ? date.getTime() : new Date().getTime();
    validate(days);
    const difference = days * daysMS;
    return new Date(newDate + difference);
}
exports.addDays = addDays;
function lessDays(days, date) {
    const newDate = date ? date.getTime() : new Date().getTime();
    validate(days);
    const difference = days * daysMS;
    return new Date(newDate - difference);
}
exports.lessDays = lessDays;
function addWeek(weeks, date) {
    validate(weeks);
    const newDate = date ? date : new Date();
    const countWeek = 7 * weeks;
    const updatedDate = newDate.setDate(newDate.getDate() + countWeek);
    return new Date(updatedDate);
}
exports.addWeek = addWeek;
function lassWeek(weeks, date) {
    validate(weeks);
    const newDate = date ? date : new Date();
    const countWeek = 7 * weeks;
    const updatedDate = newDate.setDate(newDate.getDate() - countWeek);
    return new Date(updatedDate);
}
exports.lassWeek = lassWeek;
function addmonths(months, date) {
    validate(months);
    const newDate = date ? date : new Date();
    const updatedDate = newDate.setMonth(newDate.getMonth() + months);
    return new Date(updatedDate);
}
exports.addmonths = addmonths;
function lessmonths(months, date) {
    validate(months);
    const newDate = date ? date : new Date();
    const updatedDate = newDate.setMonth(newDate.getMonth() - months);
    return new Date(updatedDate);
}
exports.lessmonths = lessmonths;
//# sourceMappingURL=index.js.map