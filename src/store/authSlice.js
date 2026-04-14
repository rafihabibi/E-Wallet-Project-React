import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLogin : localStorage.getItem("isLogin") === "true",
};

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        login: (state) => {
            state.isLogin = true;
            localStorage.setItem("isLogin", "true");
        },
        logout: (state) => {
            state.isLogin = false;
            localStorage.removeItem("isLogin");
        }
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
