import axiosClient from './axiosClient'

const searchAPI = {
    getMovieSearch: (value) => {
        const url = `/movie/search?name=${value}`
        return axiosClient.get(url)
    }
}

export default searchAPI
