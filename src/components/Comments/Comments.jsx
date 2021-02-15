import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

const Comments = props => {
    const comments = useSelector(state => state.comments);

    return (
        <Container>
            <Row>
                {comments.comments.map(comment => {
                    return (
                        <Col>
                            <Row>id: {comment.id}</Row>
                            <Row>Name: {comment.name}</Row>
                            <Row>Email: {comment.email}</Row>
                            <Row>body: {comment.body}</Row>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
};

export default Comments;