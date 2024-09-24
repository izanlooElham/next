import api from "../config/api"

const getAllProducts= async(search)=>{
        try {
            const response= await api.get(`/admin/products/list?page=1&limit=11/${search}`)
            return {response}
        } catch (error) {
            return{error}
        }
}
const getOneProductById= async(_id)=>{
    try {
        const response= await api.get(`/admin/products/${_id}`)
        return {response}
    } catch (error) {
        return{error}
    }
}
export {getAllProducts,getOneProductById}