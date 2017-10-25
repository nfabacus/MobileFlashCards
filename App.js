import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { createStore, applyMiddleware, compose } from 'redux'

import reduxThunk from 'redux-thunk';

import { Provider } from 'react-redux'
import reducers from './src/reducers'
import AddDeck from './src/components/AddDeck'
import Decks from './src/components/Decks'
import DeckDetail from './src/components/DeckDetail'
import AddCard from './src/components/AddCard'
import QuizView from './src/components/QuizView'

import PushNotification from 'react-native-push-notification'

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarIcon: ()=><Entypo name="home" size={30} color="black" />
    }
  },
  ["Add A Deck"]: {
    screen: AddDeck,
  }
}, {
  navigationOptions: {
    header: null
  }
})

const Stack = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      header: null
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTitle: "Add Card",
    }
  },
  Quiz: {
    screen: QuizView,
    navigationOptions: {
      headerTitle: "Quiz"
    }
  }
})

const finalCreateStore = compose(
  applyMiddleware(reduxThunk)
)(createStore);

export const store = finalCreateStore(reducers);

export default class App extends Component {
  componentDidMount() {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
      },
    })
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1}}>
          <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
          />

          <Stack />

        </View>
      </Provider>
    );
  }
}

