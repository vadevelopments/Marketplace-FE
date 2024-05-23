import axios from 'axios';
const apiUrl = process.env.MARKETPLACE_URL;

const marketplaceUrl = "http://localhost:8000"

export const getUsers = async () => {
  try {
    const response = await axios.get(`${marketplaceUrl}/user/users/`);
    return response;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
