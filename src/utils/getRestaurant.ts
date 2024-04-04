
import axiosInstance from './axiosInstance';



type restaurant = {
  id: number;
  title: string;
  img: string;
  rating: number;
  open: 1 | 0;
  price: string;
  categories: {
    id: number;
    name: string;
  }[];
};

export const getRestaurant = async () => {
    try {

        const response = await axiosInstance.get(`/api/v1/restaurants`);

        const data = await response.data.map((item: restaurant)=> ({
          ...item,
          open: item.open === 1 ? true : false
        }));
        
        return data;
        
      } catch (error) {
        console.error("Error fetching restaurants", error);
        throw error;
      }
}

export const getRestaurantDetail = async (id: string) => {
  try {

      const response = await axiosInstance.get(`/api/v1/restaurants/${id}`);

      const data = await response.data
      
      return data;
      
    } catch (error) {
      console.error("Error fetching restaurants", error);
      throw error;
    }
}


export default getRestaurant