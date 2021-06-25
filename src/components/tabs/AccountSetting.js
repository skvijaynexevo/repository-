import React from 'react'
import All from '../website/All.module.css'
import Box from '@material-ui/core/Box';
import { useForm } from "react-hook-form"; 
import { Container, Row, Col } from 'react-grid-system';
import Button from '@material-ui/core/Button'; 
import { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider'; 
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar'; 
import DroneImg from '../images/drone-img.svg'
import swal from 'sweetalert'; 
import Loader from '../Loader/loader'
import { userService } from '../_services/user.service';


export default function AccountSetting() {
    const [user, Setuser] = useState([]);
    const [isLoading, setLoading] = useState(false);
    // const [success, setSuccess] = useState(false);
    // const [SuccessMessages , setSuccessMessages] = useState(false);
    // const[ErrorMessages , setErrorMessages] = useState(false);
    // const [error, setError] = useState(false);

    useEffect(() => {
 
      userService.User().then(res => {
            Setuser(res.data); 
          },
            err => { 
            }
          )
    
      }, []);
    
    const onSubmit = (event) => {
      setLoading(true);  
        const config = {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('access_token')
            }
          }
          axios.post('http://demo-nexevo.in/dn-auth-app/auth-app/public/api/auth/accountsettings', {
        username: event.username, 
        phone: event.phonenumber,
        // role: 1,
        // password: event.password
      },config).then(res => { 
        swal(res.data.message, {
          icon: "success",
        });
        setLoading(false);  
        // setSuccess(true);  
        // setSuccessMessages(res.data.message); 
      })

      
      .catch(function (error) {
        setLoading(false);  
        swal(error.response.data.message.username[0], {
          icon: "error",
        }); 
        });
    }

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
   
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      } 
      setOpen(false);
    }; 
 
    const {register ,handleSubmit, errors, watch ,control  } = useForm(); 
   
      const [value, setValue] = useState()
      const [state, setState] = React.useState({
          checkedA: false, 
        });
        const handleChange = (event) => {
          setState({ ...state, [event.target.name]: event.target.checked });
        };


    return (
        <>
        
        {/* {
             success && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}><Alert  variant="filled"  severity="success">{SuccessMessages}</Alert></Snackbar>
          } */}
              {/* {error && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}><Alert  variant="filled"  severity="error">{ErrorMessages}</Alert></Snackbar>} */}
 
      {errors.username && errors.username.message  && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}><Alert variant="filled" onClose={handleClose} severity="error">This is a requied feild!</Alert></Snackbar>} 
      {errors.phonenumber && errors.phonenumber.type === "required" && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}><Alert variant="filled" onClose={handleClose} severity="error">This is a requied feild!</Alert></Snackbar>} 
       
                    <section className={All.PublicProfile}>
                        <Container className={All.Container}>
                        <Row className={All.ProfileContainer}>  
                            <Col lg={12}> 
                            <form className={All.form}  onSubmit={handleSubmit(onSubmit)} >
                            <div className={All.FormGroup}>
                                <label className={All.Bold} for="usr">User Name:</label>
                                <input type="text" name="username" className={All.FormControl} id="usr" defaultValue={user.username} ref={register ({ required : true, minLength : 2}) }/> 
 
                            </div>

                            <div className={All.FormGroup}>
                                <label className={All.Bold} for="usr">Email ID:</label>
                                <input type="email" name="email_id" className={All.FormControl} id="usr" defaultValue={user.email} readOnly ref={register ({ required : true,pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,  message: "invalid email address"  }}) }/> 
 
                            </div>

                            <div className={All.FormGroup}>
                                <label className={All.Bold} for="usr">Phone Number<span className={All.FSize_12}>(with country code)</span>:</label>
                                <input   type="text" name="phonenumber" className={All.FormControl} id="usr" defaultValue={user.phone} ref={register ({ required : true, minLength : 2}) }/>  
  
                            </div> 
 
                            

                        <Box className={All.FormGroup} pb={4}>  
                                {isLoading ? ( <>
                          <Button variant="contained" color="default" type="submit" onClick={handleClick} className={All.LoaderBtn}>
                          <Loader /> Loading</Button>
                        </> ) : ( <>
                          <Button variant="contained" color="default" type="submit" onClick={handleClick} className={All.BtnStyle_5}>
                          Save</Button>
                        </> )}

                        </Box>    
           </form>
                            </Col> 
                        </Row>
                </Container>
            </section> 
            
        </>
    )
}
