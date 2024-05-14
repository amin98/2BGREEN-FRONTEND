import axios from 'axios';

const connection = axios.create({
  baseURL: 'https://dummyjson.com', //localhost:8080/api
  headers: {
    'Content-type': 'application/json',
    withCredentials: true,
  },
});

export default connection;
