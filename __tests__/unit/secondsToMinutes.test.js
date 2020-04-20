"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../src/index");
describe('transform seconds into minutes', function () {
    it('should turn seconds into minutes (without seconds)', function () {
        var response = index_1.secondsToMinutes(60);
        expect(response).toBe('01');
    });
    it('should turn seconds into minutes (with seconds)', function () {
        var response = index_1.secondsToMinutes(75);
        expect(response).toBe('01:15');
    });
});
