import { combineReducers } from 'redux'
import NewsReducer from './reducer_news'
import PeopleReducer from './reducer_people'
import NewsSearchReducer from './reducer_NewsSearch'

const rootReducers = combineReducers({
  news: NewsReducer,
  newsSearch: NewsSearchReducer,
  people: PeopleReducer

})

export default rootReducers
