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
        managerMoviesTime: {
            moviesTimeNumber: {},
            filter: {
                name: null,
                theater: null,
                date: null,
                dateSelect: null,
                theaterSelect: null,
            },
            listName: [],
            statusNew: null,
            statusDelete: null,
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

        clearMessagesDeleteSuccess: (state, action) => {
            return {
                ...state,
                managerMovies: {
                    ...state.managerMovies,
                    messagesDeleteSuccess: null
                }
            }
        },

        getMovieTime: () => { },

        getMoviesTimeNumber: (state, action) => {
            return {
                ...state,
                managerMoviesTime: {
                    ...state.managerMoviesTime,
                    moviesTimeNumber: action.payload
                }
            }
        },

        getNameMovieTime: () => { },

        getListNameMoviesTime: (state, action) => {
            return {
                ...state,
                managerMoviesTime: {
                    ...state.managerMoviesTime,
                    listName: action.payload,
                }
            }
        },

        getNameMoviesSelectTime: (state, action) => {
            return {
                ...state,
                managerMoviesTime: {
                    ...state.managerMoviesTime,
                    filter: {
                        ...state.managerMoviesTime.filter,
                        name: action.payload
                    }
                }
            }
        },

        getTheater: () => { },

        getAllTheater: (state, action) => {
            return {
                ...state,
                managerMoviesTime: {
                    ...state.managerMoviesTime,
                    filter: {
                        ...state.managerMoviesTime.filter,
                        theater: action.payload
                    }
                }
            }
        },

        getDate: () => { },

        getAllDate: (state, action) => {
            return {
                ...state,
                managerMoviesTime: {
                    ...state.managerMoviesTime,
                    filter: {
                        ...state.managerMoviesTime.filter,
                        date: action.payload
                    }
                }
            }
        },

        getMovieTimeUpdate: () => { },

        getAllMovieTimeUpdate: (state, action) => {
            return {
                ...state,
                managerMoviesTime: {
                    ...state.managerMoviesTime,
                    moviesTimeNumber: action.payload
                }
            }
        },

        clearTheater: (state, action) => {
            return {
                ...state,
                managerMoviesTime: {
                    ...state.managerMoviesTime,
                    filter: {
                        ...state.managerMoviesTime.filter,
                        theaterSelect: null
                    }
                }
            }
        },

        clearDate: (state, action) => {
            return {
                ...state,
                managerMoviesTime: {
                    ...state.managerMoviesTime,
                    filter: {
                        ...state.managerMoviesTime.filter,
                        dateSelect: null
                    }
                }
            }
        },

        newMovieTime: () => { },

        statusNewSuccess: (state, action) => {
            return {
                ...state,
                managerMoviesTime: {
                    ...state.managerMoviesTime,
                    statusNew: action.payload
                }
            }
        },

        getDateSelect: (state, action) => {
            return {
                ...state,
                managerMoviesTime: {
                    ...state.managerMoviesTime,
                    filter: {
                        ...state.managerMoviesTime.filter,
                        dateSelect: action.payload
                    }
                }
            }
        },

        getTheaterSelect: (state, action) => {
            return {
                ...state,
                managerMoviesTime: {
                    ...state.managerMoviesTime,
                    filter: {
                        ...state.managerMoviesTime.filter,
                        theaterSelect: action.payload
                    }
                }
            }
        },

        deleteMovieTime: () => { },

        deleteMovieTimeSuccess: (state, action) => {
            return {
                ...state,
                managerMoviesTime: {
                    ...state.managerMoviesTime,
                    statusDelete: action.payload,
                }
            }
        },

        clearStatusNewMovieTime: (state, action) => {
            return {
                ...state,
                managerMoviesTime: {
                    ...state.managerMoviesTime,
                    statusNew: null
                }
            }
        },

        clearStatusDeleteMovieTime: (state, action) => {
            return {
                ...state,
                managerMoviesTime: {
                    ...state.managerMoviesTime,
                    statusDelete: null
                }
            }
        },

        getErrors: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        },


    }
})

const { actions, reducer } = manager
export const {
    // manager user
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

    // manager movies
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
    clearMessagesDeleteSuccess,

    // manager movies time
    getMovieTime,
    getMoviesTimeNumber,
    getNameMovieTime,
    getListNameMoviesTime,
    getNameMoviesSelectTime,
    getTheater,
    getAllTheater,
    getDate,
    getAllDate,
    getMovieTimeUpdate,
    getAllMovieTimeUpdate,
    clearTheater,
    clearDate,
    newMovieTime,
    statusNewSuccess,
    getDateSelect,
    getTheaterSelect,
    deleteMovieTime,
    deleteMovieTimeSuccess,
    clearStatusNewMovieTime,
    clearStatusDeleteMovieTime,

    getErrors,
} = actions;
export default reducer;
