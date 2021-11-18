import { createSlice } from "@reduxjs/toolkit";

const payment = createSlice({
    name: "payment",
    initialState: {
        infoPayment: {},
        method: null,
        error: null,
        paymentSuccess: null,
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

        getPaymentSuccess: (state, action) => {
            return {
                ...state,
                paymentSuccess: action.payload
            }
        },

        clearPaymentSuccess: (state, action) => {
            return {
                ...state,
                paymentSuccess: null
            }
        },

        paymentReset: (state, action) => {
            return {
                infoPayment: {},
                method: null,
            }
        },

        rePayment: () => { },

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
    rePayment,
    getPaymentSuccess,
    clearPaymentSuccess,
    error,
} = actions;
export default reducer;
