const webPush = require('web-push')

const vapidKeys = {
  "publicKey": "BIMGAC9BXY91w3oWgwDPnNeSxBuOmyRvUqr6_WeaUF4c8Aa5Bqb8-8bUu9PuizQaAMGDhxGRHs6EZmL8KfVZ95M",
  "privateKey": "yvLYJg1F9Zw5wC7Q5-GWtKzZQ0mRZwT1bfJXDjRe8wM"
};


webPush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
)

const pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/fdoqQY-eCpE:APA91bHl6CJl-LRaDDcKaM5FpazHCGYCiB14swQpnQ3ZU2w1ZLJWB9bQtmpZtLYJVmlyC3CR73b_6kokkQWYGydAXLbLERESFSJR0k-DWqVkib2d-jftdV7pJVR2Tm1gNlBKkTlqxwq1",
  "keys": {
    "p256dh": "BBGC/DbbJFpQy07m5Wz6uERkiPjvGtaT+/1TSW/Z2KHwciC0xIFoLiGuoZ2FoB2tW0iE4Vy6K7xyQ9iHZMdN6uI=",
    "auth": "RQkfjzqVEhnGjpwfWX5GHA=="
  }
}

const payload = 'Test kirim notif!';

const options = {
  gcmAPIKey: '810474948980',
  TTL: 60
}

webPush.sendNotification(
  pushSubscription,
  payload,
  options
)
