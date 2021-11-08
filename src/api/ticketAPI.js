import axiosClient from './axiosClient'

const ticketAPI = {
    getAllTheater: () => {
        const url = '/theater/all'
        return axiosClient.get(url)
    },

    getAllDates: (idMovie, idTheater) => {
        const url = `/movietime/${idMovie}/${idTheater}`
        return axiosClient.get(url)
    },

    getAllHours: (idMovie, idTheater, idDate) => {
        const url = `/movietime/${idMovie}/${idTheater}/${idDate}`
        return axiosClient.get(url)
    },

    getAllSeats: (idMovie, idTheater, idDate, idHours) => {
        const url = `/movietime/${idMovie}/${idTheater}/${idDate}/${idHours}`
        return axiosClient.get(url)
    },
}

export default ticketAPI
