import axios from 'axios';

export const getUsers = async () => {
	try {
		const response = await axios.get(`${process.env.MARKETPLACE_URL}/user/users/`);
		return response;
	} catch (error) {
		console.error('Error fetching users:', error);
		throw error;
	}
};