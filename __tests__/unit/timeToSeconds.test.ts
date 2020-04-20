import { timeToSeconds } from '../../src/index'

describe('transform time into seconds', () => {
    it('should turn time into seconds', () => {
        const response = timeToSeconds('01:01')
        expect(response).toBe(3660)
    })
})