import axiosClient from './axiosClient'

const managerMoviesTime = {
    getAPIAllMoviesNumber: (limit, page, filter) => {
        const params = {
            page: page,
            limit: limit,
            theater: filter.theaterSelect ? filter.theaterSelect : null,
            movie: filter.name ? filter.name.id : null,
            date: filter.dateSelect ? filter.dateSelect : null,
        }
        const url = `/movietime/all`
        return axiosClient.get(url, { params })
    },

    getAPIAllListName: () => {
        const url = `/movie/name`
        return axiosClient.get(url)
    },

    getAPINewMovie: ({ movie, theater, data }) => {
        const url = `/movietime/create/${movie}/${theater}`
        return axiosClient.post(url, data)
    },

    deleteMovieTime: (id) => {
        const url = `/movietime/${id}`
        return axiosClient.delete(url)
    }
}

export default managerMoviesTime
