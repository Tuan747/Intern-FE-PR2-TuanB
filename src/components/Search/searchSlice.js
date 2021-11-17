import { createSlice } from "@reduxjs/toolkit";

const Search = createSlice({
    name: 'Search',
    initialState: {
        value: '',
        error: null,
        result: [],
    },
    reducers: {
        getValue: (state, action) => {
            return {
                ...state,
                value: action.payload
            }
        },

        getResult: (state, action) => {
            return {
                ...state,
                result: action.payload
            }
        },

        getError: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        },
    }
})

const { actions, reducer } = Search
export const {
    getValue,
    getResult,
    getError,
} = actions;

export default reducer;
