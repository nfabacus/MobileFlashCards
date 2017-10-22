import { combineReducers } from 'redux'
import decksReducer from './decks_reducer'

const rootReducer = combineReducers({
    decks: decksReducer,
})

export default rootReducer