import { createSlice } from '@reduxjs/toolkit';

const showModal = createSlice({
    name: 'showmodal',
    initialState: false,
    reducers: {
        openShowModal: (state, action) => {
            return true;
        },
        closeShowModal:  (state, action) => {
            return false;
        },
    }
})

const { reducer, actions } = showModal;
export const { openShowModal, closeShowModal } = actions;
export default reducer; 