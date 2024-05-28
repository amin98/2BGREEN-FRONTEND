import axios from 'axios';

const connection = axios.create({
  baseURL: 'http://192.168.1.104:7020/api/',
});

export default connection;
