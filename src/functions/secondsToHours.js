"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (seconds) {
    var time = {
        hours: 0,
        minutes: 0,
        seconds: 0
    };
    var handle = function (seconds) {
        if (seconds >= 60) {
            seconds -= 60;
            time.minutes += 1;
            return handle(seconds);
        }
        else if (time.minutes >= 60) {
            time.minutes -= 60;
            time.hours += 1;
            return handle(seconds);
        }
        else {
            time.seconds += seconds;
            var hoursFormated = ('00' + time.hours).slice(-2);
            var minutesFormated = ('00' + time.minutes).slice(-2);
            var secondsFormated = ('00' + time.seconds).slice(-2);
            if (time.seconds > 0) {
                return hoursFormated + ":" + minutesFormated + ":" + secondsFormated;
            }
            else {
                return hoursFormated + ":" + minutesFormated;
            }
        }
    };
    return handle(seconds);
});
