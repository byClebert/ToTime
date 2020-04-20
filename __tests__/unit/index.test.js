"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var totime = __importStar(require("../../src/index"));
describe('index', function () {
    it('should return the interval in minutes', function () {
        var response = totime.intervalInMinutes('01:10', '02:30');
        expect(response).toBe(80);
    });
    it('should return hours and minutes', function () {
        var response = totime.minutesToHours(75);
        expect(response).toBe('01:15');
    });
    it('should turn seconds into hours (with seconds)', function () {
        var response = totime.secondsToHours(14465);
        expect(response).toBe('04:01:05');
    });
    it('should turn seconds into hours (without seconds)', function () {
        var response = totime.secondsToHours(14400);
        expect(response).toBe('04:00');
    });
    it('should turn seconds into minutes (without seconds)', function () {
        var response = totime.secondsToMinutes(60);
        expect(response).toBe('01');
    });
    it('should turn seconds into minutes (with seconds)', function () {
        var response = totime.secondsToMinutes(75);
        expect(response).toBe('01:15');
    });
    it('should turn time into minutes', function () {
        var response = totime.timeToMinutes('01:10');
        expect(response).toBe(70);
    });
    it('should turn time into seconds', function () {
        var response = totime.timeToSeconds('01:01');
        expect(response).toBe(3660);
    });
});
