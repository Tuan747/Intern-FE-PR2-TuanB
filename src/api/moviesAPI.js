import axiosClient from './axiosClient'

const moviesAPI = {
    getAPIStatus: (status) => {
        const url = `/movie/${status}`
        return axiosClient.get(url)
    },

    getAPIDetail: (slug) => {
        const url = `/movie/${slug}`
        return axiosClient.get(url)
    },
}

export default moviesAPI
