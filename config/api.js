import { getNewToken } from "@/services/getToken"
import getCookie, { setCookie } from "@/utils/cookie"
import axios from "axios"

const api=axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type":"application/json"
    }
})
api.interceptors.request.use(async(request)=>{
    const accessToken=await getCookie("accessToken")
    if(accessToken){
        request.headers["Authorization"] = `Bearer ${accessToken}`
    }
    return request
}, (error)=>{
    return Promise.reject(error)
})
api.interceptors.response.use((response)=>{
    return response
},async(error)=>{
    const originalRequest = error.config
    if(error.status === 401 && !originalRequest._retry){
        originalRequest._retry = true
        const res =await getNewToken()
        if(!res?.response) return
        await setCookie(res.response.data.data)
        return api(originalRequest)
    }
})

export default api