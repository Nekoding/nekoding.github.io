import { requestNotification } from './_requestNotification'

const notifRegister = () => {
  if ('Notification' in window) {
    requestNotification()
  } else {
    console.error('Browser tidak mendukung push notifikasi')
  }
}


export { notifRegister }
