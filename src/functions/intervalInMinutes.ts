export default (timeStart: string, timeEnd: string): number => {
    let timeA = new Date(`2020-01-01 ${timeStart}`)
    let timeB = new Date(`2020-01-01 ${timeEnd}`)
    let minutesA = (timeA.getHours() * 60) + timeA.getMinutes()
    let minutesB = (timeB.getHours() * 60) + timeB.getMinutes()
    return minutesB - minutesA
}