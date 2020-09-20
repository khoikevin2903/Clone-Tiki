import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as firebase from 'firebase';

export const fetchSockPrice = createAsyncThunk(
    'shockPrice/fetchShockPrice',
    (endpoint) => new Promise((a,b)=> {
        var dbRef = firebase.database().ref().child(endpoint);
		dbRef.on('value', snap => a(snap.val()));
    })
)


const shockPrice = createSlice({
    name: 'shockPrice',
    initialState: [],
    reducers: {
        SaveProduct: (state, action) => {
            localStorage.setItem('products', JSON.stringify(action.payload));
            return action.payload;
        }
    },
    extraReducers: {
        [fetchSockPrice.fulfilled]: (state, action) => {
            // Add user to the state array
            
            return action.payload;
          }
    }

})

const {reducer, actions} = shockPrice;
export const {SaveProduct} = actions;
export default reducer;

