import { RECEIVE_DECKS, ADD_DECK, RESET_DECKS } from '../actions'

export default function(state={}, action) {
  
  switch(action.type) {
    case RECEIVE_DECKS:
      return action.decks
    
    case ADD_DECK:
      const newDeck = {
        ...state, ...action.newDeck
      }
      console.log("newDeck>>>>>", newDeck)
      return newDeck

    case RESET_DECKS:
      return {}
    default:
      return state
  }
}