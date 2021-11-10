import { createSlice } from "@reduxjs/toolkit";
import { TAB_ADMIN_USER } from "../../constants";

const manager = createSlice({
    name: "manager",
    initialState: {
        tab: TAB_ADMIN_USER,
        managerUser: {
            user: [],
            userNumberInWeek: 0,
            userNumberInMonth: 0,
            userNumberInYear: 0,
            deleteStatus: null,
        },
        managerMovies: {
            movies: [],
        },
        error: null,
    },
    reducers: {
        getNewTab: (state, action) => {
            return {
                ...state,
                tab: action.payload
            }
        },

        getUser: () => {
        },

        getAllUser: (state, action) => {
            return {
                ...state,
                managerUser: {
                    ...state.managerUser,
                    user: action.payload
                }
            }
        },

        getUserWeek: () => {
        },

        getNumberUserWeek: (state, action) => {
            return {
                ...state,
                managerUser: {
                    ...state.managerUser,
                    userNumberInWeek: action.payload
                }
            }
        },

        getUserMonth: () => {
        },

        getNumberUserMonth: (state, action) => {
            return {
                ...state,
                managerUser: {
                    ...state.managerUser,
                    userNumberInMonth: action.payload
                }
            }
        },

        getUserYear: () => {
        },

        getNumberUserYear: (state, action) => {
            return {
                ...state,
                managerUser: {
                    ...state.managerUser,
                    userNumberInYear: action.payload
                }
            }
        },

        deleteUser: () => {
        },

        getStatusDeletesUser: (state, action) => {
            return {
                ...state,
                managerUser: {
                    ...state.managerUser,
                    deleteStatus: action.payload
                }
            }
        },

        clearStatusDeleteUser: (state, action) => {
            return {
                ...state,
                managerUser: {
                    ...state.managerUser,
                    deleteStatus: null
                }
            }
        },

        getMovies: () => { },

        getAllMovies: (state, action) => {
            return {
                ...state,
                managerMovies: {
                    movies: action.payload
                }
            }
        },

        getErrors: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        }

    }
})

const { actions, reducer } = manager
export const {
    getNewTab,
    getUser,
    getAllUser,
    getUserWeek,
    getNumberUserWeek,
    getUserMonth,
    getNumberUserMonth,
    getUserYear,
    getNumberUserYear,
    deleteUser,
    getStatusDeletesUser,
    clearStatusDeleteUser,
    getMovies,
    getAllMovies,
    getErrors,
} = actions;
export default reducer;
