import api from "../config/api"


const getAllStories= async()=>{
        try {
            const response= await api.get("/admin/story/all")
            return{response}
        } catch (error) {
            return{error}
        }
}

export {getAllStories}