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
        number_ticket: 0,
        price: 0,
        gift_code: null,
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
                number_ticket: state.number_ticket + 1
            }
        },

        addGift: (state, action) => {
            return {
                ...state,
                gift_code: action.payload,
                price: (state.number_ticket * action.payload.price) - action.payload.gift.value,
            }
        },

        removeSeatsSelect: (state, action) => {
            return {
                ...state,
                seatSelect: [...state.seatSelect.filter(seat => seat !== action.payload.seat)],
                price: state.price - action.payload.price,
                number_ticket: state.number_ticket - 1
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
                number_ticket: 0,
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
    addGift,
    removeSeatsSelect,
    resetHours,
    resetDate,
    resetSeats
} = actions;
export default reducer;
