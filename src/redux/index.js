import postsReducer from './posts/reducer';
import commentsReducer from './comments/reducer';
import {
    combineReducers,
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
    posts: postsReducer,
    comments: commentsReducer, 
});

export const store = createStore(
    allReducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f,
    )
);