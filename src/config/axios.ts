import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
    config => {
      
    //   config.withCredentials = true
  
      config.headers['Content-Type'] = config.headers['Content-Type'] === undefined ? 'application/json' : config.headers['Content-Type'];
      config.headers['Accept'] = 'application/json'
      config.headers['Origin'] = '*'
      config.headers['Access-Control-Allow-Origin'] = '*'
      config.baseURL = "http://localhost:5173"
  
      return config;
    },
    error => {
      Promise.reject(error)
    }
  );
  
  axios.interceptors.response.use(
    (response) => {
      console.log("request success response")
      return response
    },
    (error) => {
      console.log("request error response", error)
  
      return Promise.reject(error);
    });
  
  
  const WebClient = axios
  export default WebClient;