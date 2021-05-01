import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface UserState {
    name: string;
    email: string;
    photo: string;
}

const initialState = {
    name: '',
    email: '',
    photo: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state: UserState, action) => {
            const { name, email, photo } = action.payload;
            state.name = name;
            state.email = email;
            state.photo = photo;
        },
        setSignOutState: (state: UserState, _) => {
            state.name = '';
            state.email = '';
            state.photo = '';
        },
    },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const selectUserName = (state: RootState) => state.user.name;
export const selectUserEmail = (state: RootState) => state.user.email;
export const selectUserphoto = (state: RootState) => state.user.photo;
