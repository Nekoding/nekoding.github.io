const swRegister = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('sw.js', { scope: '/' })
        .then(() => console.info('service worker berhasil diinstal'))
        .catch(err => console.error(err))
    })
  } else {
    console.log('Browser tidak mendukung service worker.')
  }
}

export { swRegister }
