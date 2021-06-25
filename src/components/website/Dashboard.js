import React, { useState } from 'react'
import {Helmet} from "react-helmet"; 
import 'react-phone-number-input/style.css'  
import { useForm } from "react-hook-form";   
import axios from 'axios' 
import Header from '../header/Header'

export default function Dashboard() {
   
  const adminUser ={
    email: "admin@gmail.com",
    password: "admin@123"
  }
//   const onSubmit = (data) => {
//     console.log(data);
// }  

const [user, setUser] = useState({email: ""});

const Login = details => { 
} 

const Logout = () => { 
} 
 
    return (
        <>
               <Helmet> 
                <title>Login</title> 
                <meta charSet="utf-8" />
                <meta name="description" content="Nested component" />
            </Helmet> 
            <Header />

<div>
{(user.email != "") ? (
  <div>
    <h2>Welcome</h2>
    <button>Logout</button>
  </div>
): (
  <Login Login={Login}/>
) }
</div>

 
        </> 
    )
}
