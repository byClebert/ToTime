import { minutesToHours } from '../../src/index'

describe('transform minutes into hours', () => {
    it('should return hours and minutes', () => {
        const response = minutesToHours(75)
        expect(response).toBe('01:15')
    })
})