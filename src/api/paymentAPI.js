import axiosClient from './axiosClient'

const paymentAPI = {
    getInfoPayment: (action) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        }
        const url = `/ticket/paymentMoMo/${action.idSeats}`
        return axiosClient.post(url, action.body, config)
    },
}

export default paymentAPI
