import { requestData } from './_api'
import { createInfo } from './_createInfo'

const loadTeamInfo = idTeams => {
  return new Promise((resolve, reject) => {
    requestData(`teams/${idTeams}`)
      .then(result => {
        const content = document.querySelector('#team-info')
        content.innerHTML = createInfo(result)

        resolve(result)
      })
      .catch(err => console.error(err))
  })
}

export { loadTeamInfo }
