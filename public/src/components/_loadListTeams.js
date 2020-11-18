import { requestData } from './_api'
import { createList } from './_createList'

const loadListTeams = () => {
  const preloader = document.querySelector('#preloader')
  requestData('competitions/2021/teams')
    .then(data => {
      preloader.style.display = 'none'
      const content = document.querySelector('#main-content')
      data.teams.forEach(team => {
        content.innerHTML += createList(team)
      })
    })
    .catch(err => console.error(err))
}

export { loadListTeams }
