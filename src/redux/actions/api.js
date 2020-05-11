import axios from 'axios'

let instance = axios.create({
  baseURL: 'http://localhost:9090/',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

 // Set the AUTH token for any request
 instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

export default instance