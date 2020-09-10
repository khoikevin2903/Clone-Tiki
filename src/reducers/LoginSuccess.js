import {createSlice} from '@reduxjs/toolkit';

const logined = JSON.parse(localStorage.getItem('login'));

const LoginSuccess = createSlice({
    name: 'loginSuccess',
    initialState: logined ? logined : false,
    reducers: {
        LoginActive: (state, action) => {
            localStorage.setItem('login', JSON.stringify(true));
            return true;
        },
        LogOut : (state, action) => {
            localStorage.setItem('login', JSON.stringify(false));
            return false;
        }
    },
});

const {reducer, actions} = LoginSuccess;
export const {LoginActive, LogOut} = actions;
export default reducer;