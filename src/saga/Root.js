
import { delay } from 'redux-saga'
import { all,fork } from 'redux-saga/effects'

/**
 * @sagas
 */
import { watchGetPosts, watchMorePosts } from './PostsSaga'

export default function* root(){
    yield all([
        fork(watchGetPosts),
        fork(watchMorePosts)
    ])
}