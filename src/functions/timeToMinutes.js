"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (time) {
    var date = new Date("2020-01-01 " + time);
    return (date.getHours() * 60) + date.getMinutes();
});
