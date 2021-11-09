import { createSlice } from "@reduxjs/toolkit";

const ticket = createSlice({
    name: "ticket",
    initialState: {
        idMovie: null,
        allTheater: [],
        idTheater: null,
        allDates: [],
        idDate: null,
        allHours: [],
        idHours: null,
        allSeats: [],
        seatSelect: [],
        price: 0,
        error: null
    },
    reducers: {
        getTheater: () => {
        },

        getAllTheater: (state, action) => {
            return {
                ...state,
                allTheater: action.payload
            }
        },

        getIdTheater: (state, action) => {
            return {
                ...state,
                idTheater: action.payload
            }
        },

        getIdMovies: (state, action) => {
            return {
                ...state,
                idMovie: action.payload
            }
        },

        getDates: () => {
        },

        getAllDates: (state, action) => {
            return {
                ...state,
                allDates: action.payload
            }
        },

        getIdDate: (state, action) => {
            return {
                ...state,
                idDate: action.payload
            }
        },

        getHours: () => {
        },

        getAllHours: (state, action) => {
            return {
                ...state,
                allHours: action.payload
            }
        },

        getIdHours: (state, action) => {
            return {
                ...state,
                idHours: action.payload
            }
        },

        getSeats: () => {
        },

        getAllSeats: (state, action) => {
            return {
                ...state,
                allSeats: action.payload
            }
        },

        getSeatsSelect: (state, action) => {
            return {
                ...state,
                seatSelect: [...state.seatSelect, action.payload.seat],
                price: state.price + action.payload.price,
            }
        },

        removeSeatsSelect: (state, action) => {
            return {
                ...state,
                seatSelect: [...state.seatSelect.filter(seat => seat !== action.payload.seat)],
                price: state.price - action.payload.price,
            }
        },

        resetHours: (state, action) => {
            return {
                ...state,
                allHours: [],
                idHours: null,
            }
        },

        resetDate: (state, action) => {
            return {
                ...state,
                allDates: [],
                idDate: null,
            }
        },

        resetSeats: (state, action) => {
            return {
                ...state,
                allSeats: [],
                seatSelect: [],
                price: 0,
            }
        },

        error: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        }

    }
})

const { actions, reducer } = ticket
export const {
    getTheater,
    getAllTheater,
    error,
    getIdTheater,
    getIdMovies,
    getDates,
    getAllDates,
    getIdDate,
    getHours,
    getAllHours,
    getIdHours,
    getSeats,
    getAllSeats,
    getSeatsSelect,
    removeSeatsSelect,
    resetHours,
    resetDate,
    resetSeats
} = actions;
export default reducer;
