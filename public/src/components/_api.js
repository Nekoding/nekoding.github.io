const BASE_URL = 'https://api.football-data.org/v2/'
const API_TOKEN = '61ce6832498046a1959ee87aad74d8d2'

const requestData = async (url = 'competitions') => {
  const result = await fetch(BASE_URL + url, {
    headers: {
      'X-Auth-Token': API_TOKEN
    }
  })
  return await result.json()
}

export { requestData }
