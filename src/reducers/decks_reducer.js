import { RECEIVE_DECKS, ADD_DECK, RESET_DECKS, ADD_CARD } from '../actions'

export default function(state={}, action) {
  
  switch(action.type) {
    case RECEIVE_DECKS:
      return action.decks
    
    case ADD_DECK:
      const newDecks = {
        ...state, ...action.newDeck
      }
      console.log("newDecks>>>>>", newDecks)
      return newDecks

    case RESET_DECKS:
      return {}
      
    case ADD_CARD:
      const { deckTitle, cardObj } = action.updatedDeckWithKeys
      console.log("deckTitle in reducer::::", deckTitle)
      console.log("cardObj in reducer::::", cardObj)
      const updatedDecks = {
        ...state, [deckTitle]:{...state[deckTitle], ...cardObj}
      }
      console.log("updatedDecks>>>>>", updatedDecks)
      return updatedDecks

    default:
      return state
  }
}