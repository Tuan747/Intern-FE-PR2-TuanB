import { createSlice } from "@reduxjs/toolkit";

const errorMessage = createSlice({
    name: "errorMessage",
    initialState: {
        isError: false,
    },
    reducers: {
        showError: (state, action) => {
            return {
                ...state,
                isError: true,
            }
        },

        hiddenError: (state, action) => {
            return {
                ...state,
                isError: false
            }
        },
    }
})

const { actions, reducer } = errorMessage
export const { showError, hiddenError } = actions;
export default reducer;
