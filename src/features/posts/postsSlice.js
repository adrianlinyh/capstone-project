import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
import { db, storage } from "../../firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from "axios";

const BASE_URL =
  "https://608e0917-d9a8-45c6-a858-e26a621bef59-00-2tj4ebpi0b8vr.sisko.replit.dev";



export const savePost = createAsyncThunk(
    'posts/savePost',
    async ({ userId, file }) => {
        try {
            let imageUrl = '';
            if (file !== null) {
            const imageRef = ref(storage, `profilePictures/${file.name}`);
            const response = await uploadBytes(imageRef, file);
            imageUrl = await getDownloadURL(response.ref);
            }
            const postsRef  = collection(db, `users/${userId}/profilePictures`);
            console.log(`users/${userId}/profilePictures`);
            // since no id is give, firebase auto generates a unique ID for this new doc
            const newPostRef = doc(postsRef);

            await setDoc(newPostRef, { imageUrl });
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

export const saveBooking = createAsyncThunk(
    "posts/saveBookings",
    async ({ bookingDate, bookingTime, bookingDuration, userId }) => {
      console.log("date:", bookingDate);
      console.log("time:", bookingTime);
      console.log("duration:", bookingDuration);
      console.log("user_id:", userId);

  
      const data = {
        date: bookingDate,
        time: bookingTime, 
        duration: bookingDuration,
        user_id: userId,
      };
  
      const response = await axios.post(`${BASE_URL}/bookings2`, data);
      return response.data;
    }
  );

export const fetchBookingsByUser = createAsyncThunk(
    "posts/fetchBookingsByUser",
    async (userId) => {
      const response = await fetch(`${BASE_URL}/bookings2/${userId}`);
      return response.json();
    }
  );

export const deleteBooking = createAsyncThunk(
  'posts/deleteBooking',
  async (bookingId) => {
      
      await axios.delete(`${BASE_URL}/bookings2/${bookingId}`);
  
        return bookingId; 
      } 
    )

    export const updateBooking = createAsyncThunk(
      'posts/updateBooking',
      async ({ bookingId, newBookingDate, newBookingTime, newBookingDuration, userId }) => {
        console.log("bookingId:", bookingId );
        console.log("date:", newBookingDate);
        console.log("time:", newBookingTime);
        console.log("duration:", newBookingDuration);
    
        const data = {
          id: bookingId,
          date: newBookingDate,
          time: newBookingTime, 
          duration: newBookingDuration,
          user_id: userId,
        };
    
        const response = await axios.put(`${BASE_URL}/bookings2/${userId}`, data);
        return response.data;
      }
    )
  

const postsSlice = createSlice ({
    name: 'posts',
    initialState: { posts: [], loading: true },
    extraReducers: (builder) => {
      
        builder.addCase(fetchBookingsByUser.fulfilled, (state, action) => {
            state.posts = action.payload;
            state.loading = false;
          }),
        builder.addCase(saveBooking.fulfilled, (state, action) => {
            state.posts = action.payload;
          }),
        builder
        .addCase(savePost.fulfilled, (state, action) => {
            state.posts = [action.payload, ...state.posts];
        }),
        builder.addCase(updateBooking.fulfilled, (state, action) => {
          state.posts = action.payload;
          state.loading = false;
        }),  
        builder.addCase(deleteBooking.fulfilled, (state, action) => {
          state.posts = state.posts.filter(post => post.id !== action.payload);
          state.loading = false;
        });
  
    },
});

export default postsSlice.reducer;