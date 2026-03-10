import axios from "axios"

const api = axios.create({
  baseURL: "https://backend-iwr8.onrender.com/api" 
})

export default api
