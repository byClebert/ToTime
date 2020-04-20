export default (seconds: number): string => {
    let time = {
        hours: 0,
        minutes: 0,
        seconds: 0
    }
    const handle = (seconds: number): string => {
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