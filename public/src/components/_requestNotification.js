import { keyGenerate } from './_keyGenerate'

const requestNotification = () => {
  Notification.requestPermission()
    .then(result => {
      if (result === 'denied') {
        console.log('Fitur notifikasi tidak diijinkan')
        return
      }

      if (result === 'default') {
        console.error('Pengguna tidak mengijinkan firut notifikasi')
        return
      }

      if (('PushManager' in window)) {
        navigator.serviceWorker.getRegistration()
          .then(registration => {
            registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: keyGenerate('BIMGAC9BXY91w3oWgwDPnNeSxBuOmyRvUqr6_WeaUF4c8Aa5Bqb8-8bUu9PuizQaAMGDhxGRHs6EZmL8KfVZ95M')
            })
              .then(subscribe => {
                console.info('Berhasil melakukan subscribe dengan endpoint : ', subscribe.endpoint)
                console.info('Berhasil melakukan subscribe dengan p256dh key: ', btoa(String.fromCharCode.apply(
                  null, new Uint8Array(subscribe.getKey('p256dh')))));
                console.info('Berhasil melakukan subscribe dengan auth key: ', btoa(String.fromCharCode.apply(
                  null, new Uint8Array(subscribe.getKey('auth')))));
              })
              .catch(error => console.error('Tidak dapat melakukan subscribe', error.message))
          })
      }
    })
}

export { requestNotification }
