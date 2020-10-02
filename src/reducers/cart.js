import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as firebase from 'firebase';

export const fetchDataUser = createAsyncThunk(
    'user/fetchDataUser',
    (endpoint) => new Promise((a,b)=> {
        var dbRef = firebase.database().ref().child(endpoint);
		dbRef.on('value', snap => a(snap.val()));
    })
)

const carts = JSON.parse(localStorage.getItem('cart'));

var check = false;

const cart = createSlice({
    name: 'cart',
    initialState: carts ? carts : [],
    reducers: {
        onAddToCart: (state, action) => {
            for(let i = 0; i < state.length; i++){
                if(action.payload.id === state[i].id){
                    state[i] = {
                        ...state[i],
                        amount: state[i].amount + action.payload.amount
                    }
                    check= true;
                    break;
                }
            }
            if(!check) state.unshift(action.payload);
            localStorage.setItem('cart', JSON.stringify(state));
            return state; 
        },
        onDeleteCart: (state, action) => {
            const index = state.findIndex(x => x.id === action.payload.id);
            state.splice(index, 1);
        },
        increaseAmount: (state, action) => {
            const index = action.payload;
            state[index] = {
                ...state[index],
                amount: state[index].amount + 1
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        reductionAmount: (state, action) => {
            const index = action.payload;
            if (state[index].amount > 1) {
                state[index] = {
                    ...state[index],
                    amount: state[index].amount - 1
                }
                localStorage.setItem('cart', JSON.stringify(state));
            }
        }  
    },
        // extraReducers : {
        //     [fetchDataUser.fulfilled] : (state, action) => {
        //         return action.payload.carts;
        //     }
        // }
})

const { reducer, actions } = cart;
export const { onAddToCart,increaseAmount,reductionAmount,onDeleteCart } = actions;
export default reducer; 