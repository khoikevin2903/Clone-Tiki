import {createSlice} from '@reduxjs/toolkit';

const LimitPage = createSlice({
    name: 'LimitPage',
    initialState: {},
    reducers: {
        ChangeLimitPage: (state, action) => {
            localStorage.setItem('LimitPage', JSON.stringify(action.payload));
            return action.payload;
        },
    }
});

const {reducer, actions} = LimitPage;
export const {ChangeLimitPage} = actions;
export default reducer;