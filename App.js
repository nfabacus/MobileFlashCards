import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { createStore, applyMiddleware, compose } from 'redux'

import reduxThunk from 'redux-thunk';

import { Provider } from 'react-redux'
import reducers from './src/reducers'
import AddDeck from './src/components/AddDeck'
import Decks from './src/components/Decks'

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
})

const finalCreateStore = compose(
  applyMiddleware(reduxThunk)
)(createStore);

export const store = finalCreateStore(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1}}>
          <StatusBar
            backgroundColor="blue"
            barStyle="light-content"
          />

          <Tabs />

        </View>
      </Provider>
    );
  }
}

