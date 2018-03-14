/**
 * Get all Posts Types
 */
import {
    GET_POSTS,

    GET_POSTS_SUCCESS,
    GET_POSTS_FAILED,

    GET_MORE_POSTS,
    GET_MORE_SUCCESS,
    GET_MORE_FAILED
} from '../redux/Types'

/**
 * Get api methods
 */
import { postsApi } from '../api/postsApi'

 /**
  * @saga efects
  */
 import {
     put, takeLatest
 } from 'redux-saga/effects'

 export function* watchGetPosts(){
      yield takeLatest(GET_POSTS, getPosts )
 }

 export function* watchMorePosts(){
     yield takeLatest(GET_MORE_POSTS, getPosts)
 }

 function* getPosts(payload){
     let nextPage = payload.payload !== 1 ? payload.payload : 1;
     let success = payload.payload !== 1 ? GET_MORE_SUCCESS : GET_POSTS_SUCCESS
     let failed = payload.payload !== 1 ? GET_MORE_FAILED : GET_POSTS_FAILED
     try{
         const result = yield postsApi(nextPage);

         yield put({ type: success, payload: result })
     }catch(err){
         yield put({ type: failes, payload:err })
     }
 }