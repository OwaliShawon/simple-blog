import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface PostsState {
    value: Array<any>
}

const initialState: PostsState = {
    value: []
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
})

export const { fetchPosts } = postsSlice.actions

export const selectPosts = (state: RootState) => state.posts.value

export default postsSlice.reducer