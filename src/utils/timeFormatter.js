export default (time) => {
    if (time!=="")
        return `• ${"🔪".repeat((time/12)+1)} ${time} ${time==="1" ? `minute` : `minutes`}`
    return ``
}