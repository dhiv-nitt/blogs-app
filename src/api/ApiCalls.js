const headers = new Headers();
headers.append('Content-Type', 'application/json');

export const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    })
    .then(response => response.json());
};

export const getComments = (postId) => {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, {
        method: 'GET',
    })
    .then(response => response.json());
};