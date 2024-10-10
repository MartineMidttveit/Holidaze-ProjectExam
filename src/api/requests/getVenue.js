export default async function getVenue(id = '') {
  const url = `https://v2.api.noroff.dev/holidaze/venues/${id}?_owner=true&_bookings=true`
  const res = await fetch(url)
  const data = await res.json()

  return data.data
}
