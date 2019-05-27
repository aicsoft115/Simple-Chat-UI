export function currentDateTimeString() {
  let now = new Date()

  const year = now.getFullYear()
  let month = now.getMonth() + 1
  if (month < 10) month = '0'+ month
  let day = now.getDate()
  if (day < 10) day = '0'+ day

  let hour = now.getHours()
  if (hour < 10) hour = '0'+ hour
  let min = now.getMinutes()
  if (min < 10) min = '0'+ min
  let sec = now.getSeconds()
  if (sec < 10) sec = '0'+ sec

  return year +'-'+ month +'-'+ day+' '+ hour +':'+ min +':'+ sec
}
