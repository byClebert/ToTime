"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../src/index");
describe('transform minutes into hours', function () {
    it('should return hours and minutes', function () {
        var response = index_1.minutesToHours(75);
        expect(response).toBe('01:15');
    });
});
