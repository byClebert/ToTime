"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (minutes) {
    var time = {
        hours: 0,
        minutes: 0
    };
    var handle = function (minutes) {
        if (minutes >= 60) {
            minutes -= 60;
            time.hours += 1;
            return handle(minutes);
        }
        else {
            time.minutes += minutes;
            var hoursFormated = ('00' + time.hours).slice(-2);
            var minutesFormated = ('00' + time.minutes).slice(-2);
            return hoursFormated + ":" + minutesFormated;
        }
    };
    return handle(minutes);
});
