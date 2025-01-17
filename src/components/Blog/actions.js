import axios from 'axios';

/*
 * keys
 */

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=gl-2018';

/*
 * action types
 */

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

/*
 * action creators
 */

//GET ALL POSTS
export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

//GET POST by id
export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

//CREATE
export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

//UPDATE


//DELETE
export function deletePost(id, callback) {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    };
}