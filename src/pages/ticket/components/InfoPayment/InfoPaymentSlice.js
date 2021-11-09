import { createSlice } from "@reduxjs/toolkit";

const payment = createSlice({
    name: "payment",
    initialState: {
        infoPayment: {},
        method: null,
        error: null
    },
    reducers: {
        getPayment: () => {
        },

        getInfoPayment: (state, action) => {
            return {
                ...state,
                infoPayment: action.payload
            }
        },

        paymentMethod: (state, action) => {
            return {
                ...state,
                method: action.payload
            }
        },

        paymentReset: (state, action) => {
            return {
                infoPayment: {},
                method: null,
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

const { actions, reducer } = payment
export const {
    getPayment,
    getInfoPayment,
    paymentMethod,
    paymentReset,
    error,
} = actions;
export default reducer;
