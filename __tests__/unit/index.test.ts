import * as totime from '../../src/index'

describe('index', () => {
    it('should return the interval in minutes', () => {
        const response = totime.intervalInMinutes('01:10', '02:30')
        expect(response).toBe(80)
    })

    it('should return hours and minutes', () => {
        const response = totime.minutesToHours(75)
        expect(response).toBe('01:15')
    })

    it('should turn seconds into hours (with seconds)', () => {
        const response = totime.secondsToHours(14465)
        expect(response).toBe('04:01:05')
    })

    it('should turn seconds into hours (without seconds)', () => {
        const response = totime.secondsToHours(14400)
        expect(response).toBe('04:00')
    })

    it('should turn seconds into minutes (without seconds)', () => {
        const response = totime.secondsToMinutes(60)
        expect(response).toBe('01')
    })

    it('should turn seconds into minutes (with seconds)', () => {
        const response = totime.secondsToMinutes(75)
        expect(response).toBe('01:15')
    })

    it('should turn time into minutes', () => {
        const response = totime.timeToMinutes('01:10')
        expect(response).toBe(70)
    })

    it('should turn time into seconds', () => {
        const response = totime.timeToSeconds('01:01')
        expect(response).toBe(3660)
    })
})