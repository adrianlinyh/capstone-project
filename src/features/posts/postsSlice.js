import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
import { db, storage } from "../../firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";




export const savePost = createAsyncThunk(
    'posts/savePost',
    async ({ userId, file }) => {
        try {
            let imageUrl = '';
            if (file !== null) {
            const imageRef = ref(storage, `posts/${file.name}`);
            const response = await uploadBytes(imageRef, file);
            imageUrl = await getDownloadURL(response.ref);
            }
            const postsRef  = collection(db, `users/${userId}/posts`);
            console.log(`users/${userId}/posts`);
            // since no id is give, firebase auto generates a unique ID for this new doc
            const newPostRef = doc(postsRef);

            await setDoc(newPostRef, { content: imageUrl });
            const newPost = await getDoc(newPostRef);

            const post = {
                id: newPost.id,
                ...newPost.data(),
            };
            
            return post;
        } catch(error) {
            console.error(error);
            throw error;
        }
    }
);

const postsSlice = createSlice ({
    name: 'posts',
    initialState: { posts: [], loading: true },
    extraReducers: (builder) => {
        builder
        .addCase(savePost.fulfilled, (state, action) => {
            state.posts = [action.payload, ...state.posts];
        })
    },
});

export default postsSlice.reducer;