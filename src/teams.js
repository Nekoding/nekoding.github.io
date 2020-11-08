import { loadTeamInfo } from './components/_loadTeamInfo'
import { saved } from './components/_database'
import { swRegister } from './components/_swRegister'
import { loadSavedTeamInfo } from './components/_loadSavedTeamInfo'

const urlSearchParams = new URLSearchParams(window.location.search)
const idTeams = urlSearchParams.get('id')
const saveButton = document.querySelector('#save')
const isFromFavorite = (window.location.hash.substr(1) === 'saved')

if (isFromFavorite) {
  loadSavedTeamInfo(idTeams)
} else {
  loadTeamInfo(idTeams)
}

saveButton.onclick = () => {
  loadTeamInfo(idTeams)
    .then(data => saved(data))
    .catch(err => console.error(err))
}

swRegister()
