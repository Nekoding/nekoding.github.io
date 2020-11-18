const webPush = require('web-push')

const vapidKeys = {
  publicKey: 'BIMGAC9BXY91w3oWgwDPnNeSxBuOmyRvUqr6_WeaUF4c8Aa5Bqb8-8bUu9PuizQaAMGDhxGRHs6EZmL8KfVZ95M',
  privateKey: 'yvLYJg1F9Zw5wC7Q5-GWtKzZQ0mRZwT1bfJXDjRe8wM'
}

webPush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/fUKkoIPdetc:APA91bGAgJcuADybW7AGBOiTaUFlPL8S8JmRvr7_9iVEpZpxAPNIEt7ORutZFj9ayw4ydIPUCM6n_QTInNDAOYbucAwZJtnf03KhAcvYEttY58C4H2PJkUox3NrY0dtiuocImo1Okr2e',
  keys: {
    p256dh: 'BEshSk7IrX0SANNLoEmYJF3wELqjfzM2QrN14klFYVq4HzEQmj4a6AegwDRmCuSJ5JM8IVjTSLXX9GtTRI30LkU=',
    auth: 'QOjg8htNgUO5P4glqcfRkw=='
  }
}

const payload = 'Test kirim notif!'

const options = {
  gcmAPIKey: '810474948980',
  TTL: 60
}

webPush.sendNotification(
  pushSubscription,
  payload,
  options
)
