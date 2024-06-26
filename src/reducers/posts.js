// ig this is listing all of the actions or rather the api calls of the frontend

import { FETCH_ALL, CREATE, UPDATE, LIKE, DELETE } from '../constants/actionTypes.js';

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
        case LIKE:
            return posts.map( (post) => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            return posts.filter( (post) => post._id !== action.payload);
        default:
            return posts;
    }
}