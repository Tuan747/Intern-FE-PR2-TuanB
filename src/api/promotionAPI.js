import axiosClient from './axiosClient'

const promotionAPI = {
    getAPIAllPromotion: (limit, page) => {
        const url = `/gift/all?limit=${limit}&page=${page}`
        return axiosClient.get(url)
    },

    getAPIAllPromotionGift: (idPromotion) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        }
        const url = `gift/${idPromotion}/get`
        return axiosClient.get(url, config)
    },
}

export default promotionAPI
