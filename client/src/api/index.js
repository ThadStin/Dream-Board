import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api/',
})

export const insertMovie = payload => api.post(`/dream`, payload)
export const getAllMovies = () => api.get(`/dreams`)
export const updateMovieById = (id, payload) => api.put(`/dream/${id}`, payload)
export const deleteMovieById = id => api.delete(`/dream/${id}`)
export const getMovieById = id => api.get(`/dream/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default apis
