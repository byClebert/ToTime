"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (timeStart, timeEnd) {
    var timeA = new Date("2020-01-01 " + timeStart);
    var timeB = new Date("2020-01-01 " + timeEnd);
    var minutesA = (timeA.getHours() * 60) + timeA.getMinutes();
    var minutesB = (timeB.getHours() * 60) + timeB.getMinutes();
    return minutesB - minutesA;
});
