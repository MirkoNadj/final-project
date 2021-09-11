import React, {useState} from "react";
import { postData } from "../service/getData";

import './Login.css'

export const Login = ({setToken}) => {
    const [email, setEmail] = useState('dev@dev.com'); //todo: remove predefined values for login
    const [password, setPassword] = useState('developer'); 

    const loginButton= (e) =>{
        e.preventDefault()
        postData(email,password,setToken)      
    }

    return(
      <div className="login-form mt-5  d-flex justify-content-center align-items-center  ">
      
      <form className='container row'  onSubmit={loginButton} >
          <div class="mb-2 col-8"> 
            <input type="email" class="form-control mb-2" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email'/>
  
            <div class="mb-2">
   
              <input type="password" class="form-control" value={password} placeholder='password'onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Submit</button>
          </div>
        </form>
        
    </div>
    )
}