import {
    GET_COMMENTS,
} from './action';

let defaultCommentsState = [{
    comments: [],
}];

const commentsReducer = (state = defaultCommentsState, action) => {
    switch(action.type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        default:
            return {
                ...state,
            };
    };
};

export default commentsReducer;