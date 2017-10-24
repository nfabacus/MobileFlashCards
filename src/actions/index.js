export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const RESET_DECKS = 'RESET_DECKS'
export const ADD_CARD = 'ADD_CARD'

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

export function addCard(deckTitle, cardObj) {
  console.log("addCard executed in action!!!")
  const updatedDeck = {[deckTitle]:cardObj}
  console.log("updatedDeck:", updatedDeck)
  StorageAPI.addCard(updatedDeck)
  const updatedDeckWithKeys = { deckTitle, cardObj }

  return {
    type: ADD_CARD,
    updatedDeckWithKeys
  }
}