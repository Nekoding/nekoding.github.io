import { getDataById } from './_database'
import { createInfo } from './_createInfo'
import { loadTeamInfo } from './_loadTeamInfo'

const loadSavedTeamInfo = idTeams => {
  const content = document.querySelector('#team-info')
  getDataById(idTeams)
    .then(data => {
      console.info('Data berhasil didapatkan dari database')
      content.innerHTML = createInfo(data)
    }).catch(() => {
      console.error('Data tidak dapat ditemukan mencoba melakukan fetch api')
      loadTeamInfo(idTeams)
  })
}

export { loadSavedTeamInfo }
