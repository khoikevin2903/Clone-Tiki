import {createSlice} from '@reduxjs/toolkit';

const value = JSON.parse(localStorage.getItem('InfoActive'));


const Info = createSlice({
    name: 'info',
    initialState: value ? value : 0,
    reducers: {
        changeActive : (state, action) => {
            localStorage.setItem('InfoActive', JSON.stringify(action.payload))
            return action.payload;
        }
    }
})

const {reducer, actions} = Info;
export const {changeActive} = actions;
export default reducer;