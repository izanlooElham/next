import api from "../config/api"

const getProfile=async() => {
    try {
        const response = await api.get("/admin/user/profile");
        
        // Check if response is valid and contains data
        if (response && response.status === 200) {
            return response.data; // Return the data
        } else {
            // Handle cases where response is not 200
            console.error("Unexpected response status:", response.status);
            return null; // Return null instead of undefined
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Handle Axios specific errors
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error("Error fetching profile:", error.response.status, error.response.data);
            } else {
                // The request was made but no response was received
                console.error("Error fetching profile: No response received", error.message);
            }
        } else {
            // Handle non-Axios errors
            console.error("Unexpected error fetching profile:", error.message);
        }
        return null; // Return null instead of throwing an error
    }
}

export {getProfile}