import { loadTeamInfo } from './components/_loadTeamInfo'
import { saved } from './components/_database'
import { swRegister } from './components/_swRegister'
import { loadSavedTeamInfo } from './components/_loadSavedTeamInfo'
import { notifRegister } from './components/_notifRegister'

const urlSearchParams = new URLSearchParams(window.location.search)
const idTeams = urlSearchParams.get('id')
const saveButton = document.querySelector('#save')
const isFromFavorite = (window.location.hash.substr(1) === 'saved')
const preloader = document.querySelector('#preloader')

if (isFromFavorite) {
  saveButton.style.display = 'none'
  preloader.style.display = 'none'
  loadSavedTeamInfo(idTeams)
} else {
  loadTeamInfo(idTeams)
    .then(() => {
      preloader.style.display = 'none'
    })
}

saveButton.onclick = () => {
  loadTeamInfo(idTeams)
    .then(data => {
      preloader.style.display = 'none'
      saved(data)
    })
    .catch(err => console.error(err))
}

swRegister()
notifRegister()
