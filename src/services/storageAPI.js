import { AsyncStorage } from 'react-native'

export function retrieveDecks() {
  return AsyncStorage.getItem('decks')
}

export function addDeck(newDeck) {
  AsyncStorage.mergeItem('decks', JSON.stringify(newDeck))
}

export function clearDecks() {
  return AsyncStorage.removeItem('decks')
}

export function addCard(updatedDeck) {
  AsyncStorage.mergeItem('decks', JSON.stringify(updatedDeck))
}