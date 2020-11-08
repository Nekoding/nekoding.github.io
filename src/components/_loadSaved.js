import { getAlldata } from './_database'
import { createList } from './_createList'

const loadSaved = () => {
  getAlldata()
    .then(teams => {
      const content = document.querySelector('#main-content')
      teams.forEach(team => {
        content.innerHTML += createList(team)
      })
    })
    .catch(() => console.error('error saat mengambil data dari db'))
}

export { loadSaved }
