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
  "endpoint": "https://fcm.googleapis.com/fcm/send/e4iaaWhYkcI:APA91bFHsLDZIysuAbAZLe_czVWvOKYpnFBX0iZxvjRsODvBVRqUEz8YJB6KqQn_KWhLLtetW2VmKh0mQEXt3CVnfiCXAb96G2I05A7BA-RwWX4GskMctRrVhsHu6KmFyPzq3-YJAhVW",
  "keys": {
    "p256dh": "BH/bW7wfODVoulKzuQCLOU2Q3g1eTeCnNqM18L9BUoI7txX8itrrIfZFLzoTYJyk/1bRTrNElpPoZFhhB9hQocw=",
    "auth": "DRJBeT9cTlWj2UShHawQyA=="
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
);
