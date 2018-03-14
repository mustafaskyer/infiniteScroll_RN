import axios from 'axios'

export function* postsApi(nextpage){
    const response = yield axios.get(`https://randomuser.me/api/?page=${nextpage}&results=8&seed=abc`)
    const result = response.status === 200 ? response.data : []
    return result; 
}