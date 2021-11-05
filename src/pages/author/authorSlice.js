import { createSlice } from "@reduxjs/toolkit";

const author = createSlice({
    name: "author",
    initialState: {
        isLogin: false,
        valueLogin: {},
        dataUser: '',
        status: null,
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
                status: null,
            }
        }
    }
})

const { actions, reducer } = author
export const { getValueLogin, getDataUser, getStatus, getUser, logOut } = actions;
export default reducer;
