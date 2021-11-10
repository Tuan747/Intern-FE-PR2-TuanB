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
            moviesNumberPlaying: 0,
            moviesNumberComming: 0,
            moviesNumberTotal: 0,
            messagesAddSuccess: null,
            messagesEditSuccess: null,
            messagesDeleteSuccess: null,
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

        getUser: () => { },

        getAllUser: (state, action) => {
            return {
                ...state,
                managerUser: {
                    ...state.managerUser,
                    user: action.payload
                }
            }
        },

        getUserWeek: () => { },

        getNumberUserWeek: (state, action) => {
            return {
                ...state,
                managerUser: {
                    ...state.managerUser,
                    userNumberInWeek: action.payload
                }
            }
        },

        getUserMonth: () => { },

        getNumberUserMonth: (state, action) => {
            return {
                ...state,
                managerUser: {
                    ...state.managerUser,
                    userNumberInMonth: action.payload
                }
            }
        },

        getUserYear: () => { },

        getNumberUserYear: (state, action) => {
            return {
                ...state,
                managerUser: {
                    ...state.managerUser,
                    userNumberInYear: action.payload
                }
            }
        },

        deleteUser: () => { },

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
                    ...state.managerMovies,
                    movies: action.payload
                }
            }
        },

        getMoviesPlaying: () => { },

        getNumberMoviesPlaying: (state, action) => {
            return {
                ...state,
                managerMovies: {
                    ...state.managerMovies,
                    moviesNumberPlaying: action.payload
                }
            }
        },

        getMoviesComming: () => { },

        getNumberMoviesComming: (state, action) => {
            return {
                ...state,
                managerMovies: {
                    ...state.managerMovies,
                    moviesNumberComming: action.payload
                }
            }
        },

        getMoviesTotal: () => { },

        getNumberMoviesTotal: (state, action) => {
            return {
                ...state,
                managerMovies: {
                    ...state.managerMovies,
                    moviesNumberTotal: action.payload
                }
            }
        },

        newMovie: () => { },

        getMessageAddSuccess: (state, action) => {
            return {
                ...state,
                managerMovies: {
                    ...state.managerMovies,
                    messagesAddSuccess: action.payload
                }
            }
        },

        clearStatusNewMovie: (state, action) => {
            return {
                ...state,
                managerMovies: {
                    ...state.managerMovies,
                    messagesAddSuccess: null
                }
            }
        },

        editMovie: () => { },

        getMessageEditSuccess: (state, action) => {
            return {
                ...state,
                managerMovies: {
                    ...state.managerMovies,
                    messagesEditSuccess: action.payload
                }
            }
        },

        clearStatusEditMovie: (state, action) => {
            return {
                ...state,
                managerMovies: {
                    ...state.managerMovies,
                    messagesEditSuccess: null
                }
            }
        },

        deleteMove: () => { },

        getMessageDeleteSuccess: (state, action) => {
            return {
                ...state,
                managerMovies: {
                    ...state.managerMovies,
                    messagesDeleteSuccess: action.payload
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
    getNumberMoviesTotal,
    getMoviesTotal,
    getNumberMoviesComming,
    getMoviesComming,
    getNumberMoviesPlaying,
    getMoviesPlaying,
    newMovie,
    getMessageAddSuccess,
    clearStatusNewMovie,
    editMovie,
    getMessageEditSuccess,
    clearStatusEditMovie,
    deleteMove,
    getMessageDeleteSuccess,
    getErrors,
} = actions;
export default reducer;
