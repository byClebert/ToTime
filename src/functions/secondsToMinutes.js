"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (seconds) {
    var time = {
        minutes: 0,
        seconds: 0
    };
    var handle = function (seconds) {
        if (seconds >= 60) {
            seconds -= 60;
            time.minutes += 1;
            return handle(seconds);
        }
        else {
            time.seconds += seconds;
            var minutesFormated = ('00' + time.minutes).slice(-2);
            var secondsFormated = ('00' + time.seconds).slice(-2);
            if (time.seconds > 0) {
                return minutesFormated + ":" + secondsFormated;
            }
            else {
                return "" + minutesFormated;
            }
        }
    };
    return handle(seconds);
});
