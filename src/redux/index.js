import { combineReducers } from 'redux'

/**
 * @ import reducers
 */
import posts from './reducers/PostsReducer'

 export default combineReducers({
     posts,
 })