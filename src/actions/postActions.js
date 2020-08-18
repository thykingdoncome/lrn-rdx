import { FETCH_POSTS, NEW_POST } from './types'
import axios from 'axios'

export const fetchPosts = () => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    dispatch({
        type: FETCH_POSTS,
        payload: res.data
    })
}

export const createPost = postData => async dispatch => {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, postData,
        {
            headers: {
                'content-type': 'application/json'
            }
        }
    )
    dispatch({
        type: NEW_POST,
        payload: res.data
    })
}