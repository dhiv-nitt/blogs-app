import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './api/ApiCalls';
import { GET_POSTS } from './redux/posts/action';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  useEffect(() => {
    if (posts.posts.length === 0) {
      getPosts()
        .then(data => {
          dispatch({
            type: GET_POSTS,
            payload: data
          });
        });
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route path={'/post/:id'} exact={true} component={Post} />
        <Route path={'/'} exact={true} component={Posts} />
      </Switch>
    </Router>
  );
}

export default App;
