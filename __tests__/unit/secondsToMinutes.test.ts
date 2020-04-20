import { secondsToMinutes } from '../../src/index'

describe('transform seconds into minutes', () => {
    it('should turn seconds into minutes (without seconds)', () => {
        const response = secondsToMinutes(60)
        expect(response).toBe('01')
    })

    it('should turn seconds into minutes (with seconds)', () => {
        const response = secondsToMinutes(75)
        expect(response).toBe('01:15')
    })
})