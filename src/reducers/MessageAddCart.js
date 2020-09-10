import { createSlice } from '@reduxjs/toolkit';

const MessageAddCart = createSlice({
    name: 'messageaddcart',
    initialState: false,
    reducers: {
        openMessageAddCart: (state, action) => {
            return true;
        },
        closeMessageAddCart: (state, action) => {
            return false;
        },
    }
})

const { reducer, actions } = MessageAddCart;
export const { openMessageAddCart, closeMessageAddCart } = actions;
export default reducer; 