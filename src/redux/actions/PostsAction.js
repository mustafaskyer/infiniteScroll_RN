/**
 * Get Posts Types
 */
import {
    GET_POSTS,
    GET_MORE_POSTS
} from '../Types'

export const getPosts = () => {

    return {
        type: GET_POSTS,
        payload: 1
    }
}

export const getMorePosts = (nextPage) => {

    return {
        type: GET_MORE_POSTS,
        payload: nextPage
    }
}