import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name: "movies",
    initialState: {
        status: '',
        movies: [],
        slug: '',
        detailMovie: {},
    },
    reducers: {
        getStatus: (state, action) => {
            return {
                ...state,
                status: action.payload
            }
        },

        getAllMovies: (state, action) => {
            return {
                ...state,
                movies: action.payload
            }
        },

        getSlug: (state, action) => {
            return {
                ...state,
                slug: action.payload

            }
        },

        getDetails: (state, action) => {
            return {
                ...state,
                detailMovie: action.payload
            }
        },
    }
})

const { actions, reducer } = movies
export const { getStatus, getAllMovies, getSlug, getDetails } = actions;
export default reducer;
