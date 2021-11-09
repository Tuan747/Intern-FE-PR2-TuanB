import axiosClient from './axiosClient'

const managerUserAPI = {
    getAPIAllUser: (limit, page) => {
        const url = `/account/all?limit=${limit}&page=${page}`
        return axiosClient.get(url)
    },

    getAPINumberWeek: () => {
        const url = `/account/all/week`
        return axiosClient.get(url)
    },

    getAPINumberMonth: () => {
        const url = `/account/all/month`
        return axiosClient.get(url)
    },

    getAPINumberYear: () => {
        const url = `/account/all/year`
        return axiosClient.get(url)
    },

    getAPIDeleteUser: (id) => {
        const url = `/account/delete/${id}`
        return axiosClient.delete(url)
    },
}

export default managerUserAPI
