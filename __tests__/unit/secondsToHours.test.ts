import { secondsToHours } from '../../src/index'

describe('transform seconds into hours', () => {
    it('should turn seconds into hours (with seconds)', () => {
        const response = secondsToHours(14465)
        expect(response).toBe('04:01:05')
    })

    it('should turn seconds into hours (without seconds)', () => {
        const response = secondsToHours(14400)
        expect(response).toBe('04:00')
    })
})