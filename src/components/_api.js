const BASE_URL = ''
const API_TOKEN = ''

const requestData = async (url = null) => {
  const result = await fetch(BASE_URL + url, {
    headers: {
      'Api-Auth-Token': API_TOKEN
    }
  })
  return await result.json()
}

export { requestData }
