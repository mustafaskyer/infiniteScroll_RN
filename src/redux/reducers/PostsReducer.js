/**
 * Get all posts Types
 */
import {
    GET_POSTS,
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILED,

    GET_MORE_POSTS,
    GET_MORE_SUCCESS,
    GET_MORE_FAILED
} from '../Types'

/**
 * Initial state values
 */
const INITIAL = {
    posts: null,
    loading: false,
    recievedPosts:false,

    morePosts:null,
    loadingMorePosts:false,

}

export default(state=INITIAL, action) => {
    switch(action.type){
        case GET_POSTS:
            return { ...state, loading: true }
        
        case GET_POSTS_SUCCESS:
            return { ...state, loading: false, posts: action.payload, recievedPosts: true}

        case GET_POSTS_FAILED:
            return { ...state, loading: false}

        case GET_MORE_POSTS:
            return { ...state, loadingMorePosts: true,}

        case GET_MORE_SUCCESS:
            return { ...state, loadingMorePosts: false, morePosts: action.payload }
        
        case GET_MORE_FAILED:
            return { ...state, loadingMorePosts: false, }    
            
        default:
            return state;    
    }
    
}