import { apiUrl } from "./config.js";

export const getProduct = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if(!response){
            throw new Error(response.data.message);
        }
        return response.json();
    } catch (error) {
        throw error;
    }
}