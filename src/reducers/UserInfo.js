import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as firebase from 'firebase';

export const fetchDataUser = createAsyncThunk(
    'user/fetchDataUser',
    (endpoint) => new Promise((a,b)=> {
        var dbRef = firebase.database().ref().child(endpoint);
		dbRef.on('value', snap => a(snap.val()));
    })
)

const user = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        AddToCart: (state, action) => {

        }
    },
    extraReducers : {
        [fetchDataUser.fulfilled] : (state, action) => {
            return action.payload.carts;
        }
    }
    
})

const { reducer, actions } = user;
export const { AddToCart} = actions;
export default reducer; 