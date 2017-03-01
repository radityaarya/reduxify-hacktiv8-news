import { combineReducers } from 'redux'
import NewsReducer from './reducer_news'

const rootReducers = combineReducers({
  news: NewsReducer
})

export default rootReducers
