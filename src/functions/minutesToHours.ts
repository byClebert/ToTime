export default (minutes: number): string => {
    let time = {
        hours: 0,
        minutes: 0
    }
    const handle = (minutes: number): string => {
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