export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const RESET_DECKS = 'RESET_DECKS'

import * as StorageAPI from '../services/storageAPI'

import { AsyncStorage } from 'react-native'

export function receiveDecks() {
  return function(dispatch){
    const request = StorageAPI.retrieveDecks()
    request.then(result=>{
      console.log("result>>>", result)
      dispatch({ 
        type: RECEIVE_DECKS,
        decks: JSON.parse(result),
      })
    })
  } 
}

export function addDeck(newDeckName) {
  const newDeck = {[newDeckName]:{}}
  StorageAPI.addDeck(newDeck)
  return {
    type: ADD_DECK,
    newDeck
  }
}

export function resetDecks() {
  StorageAPI.clearDecks()
  return {
    type: RESET_DECKS
  }
}