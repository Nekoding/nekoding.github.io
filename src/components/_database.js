import { openDB } from 'idb'

const VERSION = 1

const dbPromised = async () => {
  return await openDB('info-bola', VERSION, {
    upgrade (db) {
      if (!db.objectStoreNames.contains('data_team')) {
        const objectStore = db.createObjectStore('data_team')
        objectStore.createIndex('team_name', 'team_name', {
          unique: false
        })
      }
    }
  })
}

const saved = dataTeam => {
  dbPromised()
    .then(db => {
      const tx = db.transaction('data_team', 'readwrite')
      const store = tx.objectStore('data_team')
      store.add(dataTeam, 'team-' + dataTeam.id)
      console.log('berhasil disimpan')
      return tx.complete
    }).catch(() => console.error('Terjadi kesalahan saat menyimpan data'))
}

const getAlldata = () => {
  return new Promise((resolve, reject) => {
    dbPromised()
      .then(db => {
        const tx = db.transaction('data_team', 'readonly')
        const store = tx.objectStore('data_team')
        return store.getAll()
      })
      .then(data => resolve(data))
      .catch(() => console.error('Terjadi kesalahan saat mengambil data'))
  })
}

const getDataById = id => {
  return new Promise((resolve, reject) => {
    dbPromised()
      .then(db => {
        const tx = db.transaction('data_team', 'readonly')
        const store = tx.objectStore('data_team')
        return store.get(`team-${id}`)
      })
      .then(data => resolve(data))
      .catch(() => reject(new Error('Data tidak ditemukan')))
  })
}

export { saved, getAlldata, getDataById }
