import {createSlice} from '@reduxjs/toolkit';

const loginActive = createSlice({
    name: 'loginActive',
    initialState: 1,
    reducers: {
        onLogin: (state, action) => {
            return 0;
        },
        onSignup: (state, action) => {
            return 1;
        }
    }
});

const {reducer, actions} = loginActive;
export const {onLogin, onSignup} = actions;
export default reducer;