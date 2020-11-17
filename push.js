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
  endpoint: 'https://fcm.googleapis.com/fcm/send/fjwDNmPw65Q:APA91bHhxuEFvScrrJPfmHAI0LE0a13Q5QgUGDu2ZuYbrGrF-SI3fxvQlA2kGPLMp4EiLO5REvSVTuPWuQ72Covg0VX3Zqr1SE52v-1NaasdvN9t2mtXnSLAoTMqGKH0gjb-3Ydp9i-N',
  keys: {
    p256dh: 'BBbNqVPoScPzhCyJROuPXZzXeouzzfzOSHGsY9Qz6xVNxRexDZg8ZoR4PC8drMKlS3nst8xfhvrDhiQsZwSKZlw=',
    auth: '7YD78HVXOdCHodv4v4HkEg=='
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
