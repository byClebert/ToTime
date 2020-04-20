import { timeToMinutes } from '../../src/index'

describe('transform time into minutes', () => {
    it('should turn time into minutes', () => {
        const response = timeToMinutes('01:10')
        expect(response).toBe(70)
    })
})