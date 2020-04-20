"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../src/index");
describe('transform time into seconds', function () {
    it('should turn time into seconds', function () {
        var response = index_1.timeToSeconds('01:01');
        expect(response).toBe(3660);
    });
});
