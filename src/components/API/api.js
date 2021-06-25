import axios from 'axios';
 
export default axios.create({
  baseURL: `http://localhost:1080/auth-app/public/api/auth` , 
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('access_token')
} 
});