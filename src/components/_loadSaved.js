import { deleteData, getAlldata } from './_database'
import { createList } from './_createList'
import M from 'materialize'

const loadSaved = () => {
  getAlldata()
    .then(teams => {
      const content = document.querySelector('#main-content')
      if (teams.length <= 0) {
        content.innerHTML = '<p>Tidak ada data di dalam database</p>'
      }

      teams.forEach(team => {
        content.innerHTML += createList(team, '#saved')
      })

      const deleteButton = document.querySelectorAll('#delete')
      deleteButton.forEach(btn => {
        btn.addEventListener('click', event => {
          const idTeam = btn.getAttribute('href').substr(11)
          deleteData(idTeam)
            .then(status => {
              if (status === undefined) {
                M.toast({ html: 'Data berhasil dihapus silahkan refresh browser anda' })
              }
            })
        })
      })
    })
    .catch(() => console.error('error saat mengambil data dari db'))
}

export { loadSaved }
