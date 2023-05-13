const dateOfTheEvent = new Date('jul 08, 2023 21:00:00')
const timeStampTheEvent = dateOfTheEvent.getTime()

const countTheHours = setInterval(function () {
  const now = new Date()
  const timeStampCurrent = now.getTime()

  const distanceToTheEvent = timeStampTheEvent - timeStampCurrent

  const dayInMs = 1000 * 60 * 60 * 24
  const horsInMs = 1000 * 60 * 60
  const minutesInMs = 1000 * 60

  const daysUntilTheEvent = Math.floor(distanceToTheEvent / dayInMs)
  const horsUntilTheEvent = Math.floor(
    (distanceToTheEvent % dayInMs) / horsInMs
  )
  const minutesUntilTheEvent = Math.floor(
    (distanceToTheEvent % horsInMs) / minutesInMs
  )
  const secondsUntilTheEvent = Math.floor(
    (distanceToTheEvent % minutesInMs) / 1000
  )

  document.getElementById(
    'counter'
  ).innerHTML = `${daysUntilTheEvent}d ${horsUntilTheEvent}h ${minutesUntilTheEvent}m ${secondsUntilTheEvent}s`

  if (distanceToTheEvent < 0) {
    clearInterval(countTheHours)
    document.getElementById('counter').innerHTML = 'O evento expirou'
  }
}, 1000)
