export default (time) => time!=="" ? `• ${"🔪".repeat((time/12)+1)} ${time} ${time==="1" ? `minute` : `minutes`}` : ``
