// create async thunk
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
    // Fetch data from external API
    const resPosts = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=20`
    );
    const resComments = await fetch(
        `https://jsonplaceholder.typicode.com/comments`
    );
    const resUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);

    const posts = await resPosts.json();
    const comments = await resComments.json();
    const users = await resUsers.json();

    // filtering posts by userId and related comments
    const postsWithComments = posts.map((post) => {
        return {
            ...post,
            comments: comments.filter((comment) => comment.postId === post.id),
            author: users.find((user) => user.id === post.userId),
        };
    });

    return postsWithComments;
});

export default fetchPosts;