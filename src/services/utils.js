import { AsyncStorage } from 'react-native'
import PushNotification from 'react-native-push-notification'

const NOTIFICATION_KEY = 'MobileFlashCards:notifications'

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(()=>{PushNotification.cancelLocalNotifications({id: '123'})})
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data=>{
      if(data===null) {
        PushNotification.cancelLocalNotifications({id: '123'})

        let tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate()+1)
        tomorrow.setHours(9)
        tomorrow.setMinutes(0)

        PushNotification.localNotificationSchedule({
          id: "123",
          message: "Don't forget to study your flash cards!", 
          date: tomorrow,  //new Date(Date.now() + (10 * 1000))
          repeatType: 'day',
        })

        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
      }
    })
}

