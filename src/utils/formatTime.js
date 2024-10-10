export default function formatTime(date) {
  const dateObj = new Date(date)

  const formattedDate = dateObj.toLocaleDateString('en-GB').replace(/\//g, '.')

  const formattedTime = dateObj.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return { date: formattedDate, time: formattedTime }
}
