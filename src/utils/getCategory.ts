
import axiosInstance from './axiosInstance';



export const getCategory = async () => {
    try {

        const response = await axiosInstance.get(`/api/v1/categories`);
        const data = await response.data

        return data;
        
      } catch (error) {
        console.error("Error fetching categories", error);
        throw error;
      }
}

export default getCategory