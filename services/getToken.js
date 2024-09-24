import api from "@/config/api"
import getCookie from "@/utils/cookie"


const getNewToken=async ()=>{
    const refreshToken =await getCookie("refreshToken")
    if(!refreshToken) return
    try {
        const response= await api.post("/user/check-refresh-token", {refreshToken})
        return {response}
    } catch (error) {
        return {error}
    }
}

export {getNewToken}