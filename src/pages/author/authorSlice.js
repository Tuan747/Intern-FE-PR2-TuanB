import { createSlice } from "@reduxjs/toolkit";

const author = createSlice({
    name: "author",
    initialState: {
        isLogin: false,
        valueLogin: {},
        dataUser: '',
        status: null,
        history: [],
        registerSuccess: null,
    },
    reducers: {
        getUser: () => {
        },

        getValueLogin: (state, action) => {
            return {
                ...state,
                valueLogin: action.payload
            }
        },

        getDataUser: (state, action) => {
            return {
                ...state,
                dataUser: action.payload,
                isLogin: true,
            }
        },

        getStatus: (state, action) => {
            return {
                ...state,
                status: action.payload
            }
        },

        logOut: (state, action) => {
            return {
                isLogin: false,
                valueLogin: {},
                dataUser: '',
                history: [],
                status: null,
            }
        },

        getHistory: () => { },

        getAllHistory: (state, action) => {
            return {
                ...state,
                history: action.payload
            }
        },

        getRegister: () => { },

        registerSuccess: (state, action) => {
            return {
                ...state,
                registerSuccess: action.payload
            }
        },

        clearStatusRegister: (state, action) => {
            return {
                ...state,
                registerSuccess: null
            }
        },
    }
})

const { actions, reducer } = author
export const { getValueLogin, getDataUser, getStatus, getUser, logOut, getHistory, getAllHistory, getRegister, registerSuccess, clearStatusRegister } = actions;
export default reducer;
