import api from "../config/api"


const getOtp=async(mobile)=>{
    try {
        const response= await api.post("/user/get-OTP", {mobile}) 
        return {response}
    } catch (error) {
        return{error}
    }
}

const CheckOtp= async(mobile, code)=>{
    try {
        const response= await api.post("/user/check-OTP", {mobile,code})
        return{response}
    } catch (error) {
        return{error}
    }
}

export {getOtp, CheckOtp}