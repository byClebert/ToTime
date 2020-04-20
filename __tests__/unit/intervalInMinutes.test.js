"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../src/index");
describe('interval in minutes', function () {
    it('should return the interval in minutes', function () {
        var response = index_1.intervalInMinutes('01:10', '02:30');
        expect(response).toBe(80);
    });
});
