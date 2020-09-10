import { createSlice } from '@reduxjs/toolkit';

const carts = JSON.parse(localStorage.getItem('cart-checked'));

var check = false;

const cartChecked = createSlice({
    name: 'cartChecked',
    initialState: carts ? carts : [],
    reducers: {
        onAddToCartChecked: (state, action) => {
            for(let i = 0; i < state.length; i++){
                if(action.payload.id === state[i].id){
                    check= true;
                    break;
                }
            }
            if(!check) state.push(action.payload);
            localStorage.setItem('cart-checked', JSON.stringify(state));
            return state; 
        },
    }
})

const { reducer, actions } = cartChecked;
export const { onAddToCartChecked} = actions;
export default reducer; 