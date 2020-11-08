import { requestData } from './_api'
import { createList } from './_createList'

const loadListTeams = () => {
  requestData('competitions/2021/teams')
    .then(data => {
      const content = document.querySelector('#main-content')
      data.teams.forEach(team => {
        content.innerHTML += createList(team)
      })
    })
    .catch(err => console.error(err))
}

export { loadListTeams }
