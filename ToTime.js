class ToTime {
    static setMinutesToHours(minutes) {
        let time = {
            hours: 0,
            minutes: 0
        }
        const handle = (minutes) => {
            if(minutes >= 60) {
                minutes -= 60
                time.hours += 1
                return handle(minutes)
            }
            else {
                time.minutes += minutes
                return `${time.hours}:${time.minutes}`
            }
        }
        return handle(minutes)
    }
    
    static setSecondsToHours(seconds) {
        let time = {
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        const handle = (seconds) => {
            if(seconds >= 60) {
                seconds -= 60
                time.minutes += 1
                return handle(seconds)
            }
            else if(time.minutes >= 60) {
                time.minutes -= 60
                time.hours += 1
                return handle(seconds)
            }
            else {
                time.seconds += seconds
                if(time.seconds > 0) {
                    return `${time.hours}:${time.minutes}:${time.seconds}`
                } else {
                    return `${time.hours}:${time.minutes}`
                }
            }
        }
        return handle(seconds)
    }

    static setSecondsToMinutes(seconds) {
        let time = {
            minutes: 0,
            seconds: 0
        }
        const handle = (seconds) => {
            if(seconds >= 60) {
                seconds -= 60
                time.minutes += 1
                return handle(seconds)
            }
            else {
                time.seconds += seconds
                if(time.seconds > 0) {
                    return `${time.minutes}.${time.seconds}`
                }
                else {
                    return `${time.minutes}`
                }
            }
        }
        return handle(seconds)
    }

    static getMinutes(time) {
        let date = new Date(`2020-01-01 ${time}`)
        return (date.getHours() * 60) + date.getMinutes()
    }

    static getSeconds(time) {
        let date = new Date(`2020-01-01 ${time}`)
        return ((date.getHours() * 60) * 60) + (date.getMinutes() * 60)
    }

    static getInterval(timeStart, timeEnd) {
        let timeA = new Date(`2020-01-01 ${timeStart}`)
        let timeB = new Date(`2020-01-01 ${timeEnd}`)
        let minutesA = (timeA.getHours() * 60) + timeA.getMinutes()
        let minutesB = (timeB.getHours() * 60) + timeB.getMinutes()
        if(minutesA > minutesB) {
            return console.error(`timeStart não pode ser maior do que timeEnd.`)
        }
        else {
            return minutesB - minutesA
        }
    }
}

module.exports = ToTime
