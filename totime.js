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
                let hoursFormated = ('00' + time.hours).slice(-2)
                let minutesFormated = ('00' + time.minutes).slice(-2)
                return `${hoursFormated}:${minutesFormated}`
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
                let hoursFormated = ('00' + time.hours).slice(-2)
                let minutesFormated = ('00' + time.minutes).slice(-2)
                let secondsFormated = ('00' + time.seconds).slice(-2)
                if(time.seconds > 0) {
                    return `${hoursFormated}:${minutesFormated}:${secondsFormated}`
                } else {
                    return `${hoursFormated}:${minutesFormated}`
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
                let minutesFormated = ('00' + time.minutes).slice(-2)
                let secondsFormated = ('00' + time.seconds).slice(-2)
                if(time.seconds > 0) {
                    return `${minutesFormated}.${secondsFormated}`
                }
                else {
                    return `${minutesFormated}`
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
