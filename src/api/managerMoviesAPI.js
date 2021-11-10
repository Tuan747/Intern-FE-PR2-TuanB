import axiosClient from './axiosClient'

const managerMoviesAPI = {
    getAPIAllMovies: (limit, page) => {
        const url = `/movie/all?limit=${limit}&page=${page}`
        return axiosClient.get(url)
    },

    getAPINumberPlaying: () => {
        const url = `/movie/all/playing`
        return axiosClient.get(url)
    },

    getAPINumberComming: () => {
        const url = `/movie/all/commingsoon`
        return axiosClient.get(url)
    },

    getAPINumberTotal: () => {
        const url = `/movie/all/total`
        return axiosClient.get(url)
    },

    getAPINewMovies: (body) => {
        const url = `/movie/create`
        return axiosClient.post(url, body)
    },

    getAPIEditMovies: (body, id) => {
        const url = `/movie/edit/${id}`
        return axiosClient.put(url, body)
    },

    getAPIDeleteMovies: (id) => {
        const url = `/movie/${id}`
        return axiosClient.delete(url)
    },
}

export default managerMoviesAPI
