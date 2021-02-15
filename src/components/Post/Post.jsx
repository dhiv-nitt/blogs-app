import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Button } from 'react-bootstrap';
import { getComments } from '../../api/ApiCalls'
import { GET_COMMENTS } from '../../redux/comments/action';
import Comments from '../Comments/Comments';

const Post = props => {
    const location = useLocation();
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
    const [postId, setPostId] = useState(undefined);
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        const idIndex = location.pathname.lastIndexOf('/');
        const id = location.pathname.substring(idIndex + 1, location.pathname.length);
        const getId = posts.posts.findIndex(post => post.id === Number.parseInt(id));
        setPostId(getId);
    }, []);

    const onCommentsButtonClicked = (event) => {
        const postid = event.currentTarget.dataset.postid;
        getComments(postid)
            .then(data => {
                dispatch({
                    type: GET_COMMENTS,
                    payload: data,
                });
                setShowComments(true);
            });
    };

    return (
        <Container>
            {postId !== undefined &&
                <Row>
                    <Row>
                    User ID : {posts.posts[postId].userId}
                    </Row>
                    <Row>
                    ID : {posts.posts[postId].id}
                    </Row>
                    <Row>
                    Title: {posts.posts[postId].title}
                    </Row>
                    <Row>
                    Body: {posts.posts[postId].body}
                    </Row>
                    <Button data-postid={posts.posts[postId].id} onClick={onCommentsButtonClicked}>
                        Comments
                    </Button>
                </Row>
            }
            {showComments && (
                <Comments />
            )}
        </Container>
    );
};

export default Post;