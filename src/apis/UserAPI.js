import axios from 'axios';


const fetchUser = async () => {
  try {
    const response = await axios.get('https://api.escuelajs.co/api/v1/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching user data: ', error);
    throw error;
  }
};

export default fetchUser;
