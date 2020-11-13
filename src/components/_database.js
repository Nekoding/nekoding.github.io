import { openDB } from 'idb'
import M from 'materialize'

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
      return store.put(dataTeam, 'team-' + dataTeam.id)
    })
    .then(status => {
      if (status) {
        M.toast({html: 'Data berhasil disimpan'})
      }
    })
    .catch(() =>  M.toast({html: 'Data yang sama sudah ada di dalam database'}))

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

const deleteData = id => {
  return new Promise(((resolve, reject) => {
    dbPromised()
      .then(db => {
        const tx = db.transaction('data_team', 'readwrite')
        const store = tx.objectStore('data_team')
        return store.delete(`team-${id}`)
      })
      .then(data => resolve(data))
      .catch(err => reject(new Error(err)))
  }))
}

export { saved, getAlldata, getDataById, deleteData }
