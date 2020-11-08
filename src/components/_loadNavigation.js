import { loadPage } from './_loadPage'

const loadNavigation = () => {
  const xmlHttpRequest = new XMLHttpRequest()
  xmlHttpRequest.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status !== 200) {
        return
      }

      document.querySelectorAll('.topnav, .sidenav')
        .forEach(element => {
          element.innerHTML = xmlHttpRequest.responseText
        })

      document.querySelectorAll('.sidenav a, .topnav a')
        .forEach(element => {
          element.addEventListener('click', event => {
            const page = event.target.getAttribute('href')
            loadPage(page)
          })
        })
    }
  }

  xmlHttpRequest.open('GET', 'partials/navigation.html', true)
  xmlHttpRequest.send()
}

export { loadNavigation }
