import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/',
})

export const insertDream = payload => api.post(`/dream`, payload)
export const getAllDreams = () => api.get(`/dreams`)
export const updateDreamById = (id, payload) => api.put(`/dream/${id}`, payload)
export const deleteDreamById = id => api.delete(`/dream/${id}`)
export const getDreamById = id => api.get(`/dream/${id}`)

const apis = {
    insertDream,
    getAllDreams,
    updateDreamById,
    deleteDreamById,
    getDreamById,
}

export default apis
