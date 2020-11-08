import { loadListTeams } from './_loadListTeams'
import { loadSaved } from './_loadSaved'

const loadPage = page => {
  const xmlHttpRequest = new XMLHttpRequest()

  xmlHttpRequest.onreadystatechange = function () {
    if (this.readyState === 4) {
      const content = document.querySelector('main')

      if (this.status === 200) {
        content.innerHTML = xmlHttpRequest.responseText
        if (page.substr(1) === 'home') {
          loadListTeams()
        } else if (page.substr(1) === 'favorite') {
          loadSaved()
        } else {
          console.log('error')
        }
      } else {
        content.innerHTML = '<p>Maaf konten yang anda pilih tidak ditemukan</p>'
      }
    }
  }

  xmlHttpRequest.open('GET', `pages/${page.substr(1)}.html`, true)
  xmlHttpRequest.send()
}

export { loadPage }
