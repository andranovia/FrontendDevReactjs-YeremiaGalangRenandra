
import axiosInstance from './axiosInstance';

export const getRestaurant = async () => {
    try {

        const response = await axiosInstance.get(`/api/v1/restaurants`);
        const data = await response.data;

        
        return data;
        
      } catch (error) {
        console.error("Error fetching product", error);
        throw error;
      }
}

export default getRestaurant