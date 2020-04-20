export default (time: string): number => {
    let date = new Date(`2020-01-01 ${time}`)
    return ((date.getHours() * 60) * 60) + (date.getMinutes() * 60)
}