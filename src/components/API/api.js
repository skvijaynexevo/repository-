import axios from 'axios';
 
export default axios.create({
  baseURL: `http://demo-nexevo.in/dn-auth-app/auth-app/public/api/auth` , 
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('access_token')
} 
});