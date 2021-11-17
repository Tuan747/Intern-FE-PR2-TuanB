import axiosClient from './axiosClient'

const managerGift = {
    getAPIWeek: () => {
        const url = `/gift/statistic/week`
        return axiosClient.get(url)
    },

    getAPIMonth: () => {
        const url = `/gift/statistic/month`
        return axiosClient.get(url)
    },

    getAPIYear: () => {
        const url = `/gift/statistic/year`
        return axiosClient.get(url)
    },

    getAPIListGift: (limit, page) => {
        const url = `/gift/all?limit=${limit}&page=${page}`
        return axiosClient.get(url)
    },

    getAPINewGift: (body) => {
        const url = `gift/create`
        return axiosClient.post(url, body)
    },

    getAPIEditGift: ({ id, body }) => {
        const url = `/gift/${id}`
        return axiosClient.put(url, body)
    },

    getAPIDeleteGift: (id) => {
        const url = `/gift/${id}`
        return axiosClient.delete(url)
    },
}

export default managerGift
