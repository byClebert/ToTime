import { intervalInMinutes } from '../../src/index'

describe('interval in minutes', () => {
    it('should return the interval in minutes', () => {
        const response = intervalInMinutes('01:10', '02:30')
        expect(response).toBe(80)
    })
})