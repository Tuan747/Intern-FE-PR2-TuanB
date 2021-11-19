import { createSlice } from "@reduxjs/toolkit";

const promotion = createSlice({
    name: "promotion",
    initialState: {
        promotion: [],
        statusGetPromotionGift: null,
        error: null,
    },
    reducers: {

        getPromotion: () => { },

        getAllListPromotion: (state, action) => {
            return {
                ...state,
                promotion: action.payload
            }
        },

        getPromotionGift: () => { },

        statusGetPromotionGift: (state, action) => {
            return {
                ...state,
                statusGetPromotionGift: action.payload
            }
        },

        clearStatusGetPromotionGift: (state, action) => {
            return {
                ...state,
                statusGetPromotionGift: null
            }
        },

        errorPromotion: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        }

    }
})

const { actions, reducer } = promotion
export const {
    getPromotion,
    getAllListPromotion,
    errorPromotion,
    getPromotionGift,
    statusGetPromotionGift,
    clearStatusGetPromotionGift,
} = actions;
export default reducer;
