import axiosClient from './axiosClient'

const managerMoviesAPI = {
    getAPIAllMovies: (limit, page) => {
        const url = `/movie/all?limit=${limit}&page=${page}`
        return axiosClient.get(url)
    },
}

export default managerMoviesAPI
