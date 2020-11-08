import { loadTeamInfo } from './components/_loadTeamInfo'
import { saved } from './components/_database'
import { swRegister } from './components/_swRegister'

const urlSearchParams = new URLSearchParams(window.location.search)
const idTeams = urlSearchParams.get('id')
const saveButton = document.querySelector('#save')

loadTeamInfo(idTeams)

saveButton.onclick = () => {
  loadTeamInfo(idTeams)
    .then(data => saved(data))
    .catch(err => console.error(err))
}

swRegister()
