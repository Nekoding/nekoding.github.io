import { loadNavigation } from './components/_loadNavigation'
import M from 'materialize'
import { loadPage } from './components/_loadPage'
import { swRegister } from './components/_swRegister'

const elements = document.querySelectorAll('.sidenav')
M.Sidenav.init(elements)
loadNavigation()

let currentPage = window.location.hash.substr(1)

if (['', 'home'].includes(currentPage)) {
  currentPage = '#home'
  loadPage(currentPage)
}

swRegister()
