import axios from 'axios';
const API_URL = 'http://demo-nexevo.in/dn-auth-app/auth-app/public/api/auth';
 const config = {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token')
          }
        } 
                                                                                                                     
export const getUsers = () => {
    return (dispatch) => {
        axios.get(`${API_URL}/hiredorners`, config)
        .then(res => res.data )
        .then((data) => { 
            dispatch({
                type: 'LIST_USERS',
                payload: data
            })
        })
        .catch(error => { 
        });
    } 
}
