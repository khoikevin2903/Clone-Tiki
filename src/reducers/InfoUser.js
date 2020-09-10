import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as firebase from 'firebase';



export const fetchInfoUser = createAsyncThunk(
    'user/fetchDataUser',
    (endpoint) => new Promise((a,b)=> {
        var dbRef = firebase.database().ref().child(endpoint);
		dbRef.on('value', snap => a(snap.val()));
    })
)

const InfoUser = createSlice({
    name: 'infoUser',
    initialState: {},
    reducers: {
        AddToCart: (state, action) => {

        }
    },
    extraReducers : {
        [fetchInfoUser.fulfilled] : (state, action) => {
            return action.payload.info;
        }
    }
    
})

const { reducer, actions } = InfoUser;
export const { AddToCart} = actions;
export default reducer; 