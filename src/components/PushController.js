import React, { Component } from 'react'
import PushNotification from 'react-native-push-notification'
import { setLocalNotification, clearLocalNotification } from '../services/utils'

export default class PushController extends Component {
  componentDidMount() {
    setLocalNotification()
  }
  
  render(){
    return null;
  }
}