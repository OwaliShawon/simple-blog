import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';
import fetchPosts from './../thunk/fetchPostThunk';

interface PostsState {
    value: Array<any>,
    loading: Boolean,
    error: String
}

const initialState: PostsState = {
    value: [],
    loading: false,
    error: "",


}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // fetchPosts: (state, action: PayloadAction<any>) => {
        //     state.value = action.payload
        // },
        deletePost: (state, action: PayloadAction<any>) => {
            state.value = state.value.filter((post: any) => post.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true;
            state.error = "Pending";
        });

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = "fulfilled";
            state.value = action.payload;
        });

        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error";
            state.value = [];
        });
    },
})

export const { deletePost } = postsSlice.actions

export const selectPosts = (state: RootState) => state.posts.value

export default postsSlice.reducer

