import React, { useState, useEffect } from 'react';
import { Container, ListGroup, ListGroupItem, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

const Posts = props => {
    const history = useHistory();
    const posts = useSelector(state => state.posts);
    const [inputVal, setInputVal] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const onPostTitleClicked = (event) => {
        const id = event.currentTarget.dataset.id;
        history.push(`/post/${id}`);
    };
    const onInputChange = (event) => {
        setInputVal(event.target.value);
    };

    const onSearchEntered = () => {
        let resultSearch = posts.posts.reduce((acc, a) => {
            if (a.title.includes(inputVal)) {
                acc.push(a);
            }
            return acc;
        }, []);
        setSearchResult(resultSearch);
    };

    return (
        <Container>
            {searchResult.length > 0 ? (
                <>
                    <ListGroup>
                        {searchResult.map(sr => {
                            return (
                                <ListGroupItem key={sr.id} data-id={sr.id} onClick={onPostTitleClicked}>
                                    {sr.title}
                                </ListGroupItem>
                            );
                        })}
                    </ListGroup>
                    <Button onClick={() => setSearchResult([])}>
                        Clear Search
                    </Button>
                </>
            ) : posts.posts.length > 0 ? (
                <>
                    <InputGroup size="lg" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-lg">Enter title to search posts</InputGroup.Text>
                            <FormControl value={inputVal} aria-label="large" aria-describedby="inputGroup-sizing-lg" onChange={onInputChange} />
                        </InputGroup.Prepend>
                    </InputGroup>
                    <Button onClick={onSearchEntered}>
                        Search
                    </Button>
                <ListGroup>
                    {posts.posts.map(post => {
                        return (
                            <ListGroupItem key={post.id} data-id={post.id} onClick={onPostTitleClicked}>
                                {post.title}
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
                </>
            ) : (
                <>
                    No Posts to show !
                </>
            )}
        </Container>
    );
};

export default Posts;