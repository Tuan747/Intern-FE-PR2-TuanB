import { createSlice } from "@reduxjs/toolkit";

const Loading = createSlice({
    name: "Loading",
    initialState: {
        isLoading: false,
    },
    reducers: {
        showLoading: (state, action) => {
            return {
                ...state,
                isLoading: true,
            }
        },

        hiddenLoading: (state, action) => {
            return {
                ...state,
                isLoading: false
            }
        },
    }
})

const { actions, reducer } = Loading
export const { showLoading, hiddenLoading } = actions;
export default reducer;
