"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../src/index");
describe('transform seconds into hours', function () {
    it('should turn seconds into hours (with seconds)', function () {
        var response = index_1.secondsToHours(14465);
        expect(response).toBe('04:01:05');
    });
    it('should turn seconds into hours (without seconds)', function () {
        var response = index_1.secondsToHours(14400);
        expect(response).toBe('04:00');
    });
});
