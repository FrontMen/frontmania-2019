export function timeArray(startTime, endTime) {
  let start = startTime.split(':')
  let end = endTime.split(':')
  let time

  start = parseInt(start[0]) * 60 + parseInt(start[1])
  end = parseInt(end[0]) * 60 + parseInt(end[1])

  const result = []

  for (time = start; time <= end; time += 30) {
    result.push(timeString(time))
  }

  return result
}

function timeString(time) {
  let hours = Math.floor(time / 60)
  let minutes = time % 60

  if (hours < 10) hours = '0' + hours // optional
  if (minutes < 10) minutes = '0' + minutes

  return hours + ':' + minutes
}
