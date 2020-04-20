export default (seconds: number): string => {
    let time = {
        minutes: 0,
        seconds: 0
    }
    const handle = (seconds: number): string => {
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
                return `${minutesFormated}:${secondsFormated}`
            }
            else {
                return `${minutesFormated}`
            }
        }
    }
    return handle(seconds)
}