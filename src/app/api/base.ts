import axios from 'axios';

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const axiosInstance = axios.create({baseURL:'https://localhost:44300/api',httpsAgent:({  
  rejectUnauthorized: false,
  withCredentials: false
})})
