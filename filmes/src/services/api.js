import axios from 'axios'

// Base da URL: https://api.themoviedb.org/3/
// URL da API: movie/550?api_key=c3a516fbbcc1c0fadad29168039b0c79


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api