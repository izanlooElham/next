import api from "../config/api"


const getAllCategories= async()=>{
        try {
            const res= await api.get("/admin/category/all")
            return{res}
        } catch (error) {
            return{error}
        }
}

export {getAllCategories}