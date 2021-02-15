import {
    GET_POSTS,
} from './action';

let defaultPostsState = {
    posts: [],
};

const postsReducer = (state = defaultPostsState, action) => {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        default:
            return {
                ...state
            };
    };
};

export default postsReducer;