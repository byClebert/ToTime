"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../src/index");
describe('transform time into minutes', function () {
    it('should turn time into minutes', function () {
        var response = index_1.timeToMinutes('01:10');
        expect(response).toBe(70);
    });
});
