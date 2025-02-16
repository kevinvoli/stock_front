"use client";

import Checkbox from "@/components/UI/input/inputChackbox";
import { useState } from "react";



export default function Register(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({email,password,name});
    
    const res = await fetch("http://localhost:3003/gateway/create_user?service=authService&module=auth", {  // Ton API NestJS
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });
  

    if (res.ok) {
      const data = await res.json();
      console.log("Inscription réussie :", data);
    } else {
      console.log("echec de l'inscription");
      
    }
  };



  return (
    <>


    <div className="register-box">
      <div className="register-logo">
        <a href="/"><b>Admin</b>LTE</a>
      </div>

      <div  className="register-box-body">
        <p  className="login-box-msg">Register a new membership</p>

        <form onSubmit={handleSubmit} method="post">
        <h2 className="text-xl font-bold mb-4">Inscription</h2>

          <div  className="form-group has-feedback">
            <input type="email"  className="form-control" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <span  className="glyphicon glyphicon-envelope form-control-feedback"></span>
          
          </div>
          <div  className="form-group has-feedback">
            <input type="text"  className="form-control" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <span  className="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div  className="form-group has-feedback">
            <input type="password"  className="form-control" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <span  className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          
          <div  className="row">
            <div  className="col-xs-8">    
              <div  className="checkbox icheck">
                <Checkbox/>
              </div>                        
            </div>
            {/* <!-- /.col --> */}
            <div  className="col-xs-4">
              <button type="submit"  className="btn btn-primary btn-block btn-flat">Register</button>
            </div>
            {/* <!-- /.col --> */}
          </div>
        </form>        

        <div  className="social-auth-links text-center">
          <p>- OR -</p>
          <a href="#"  className="btn btn-block btn-social btn-facebook btn-flat"><i  className="fa fa-facebook"></i> Sign up using Facebook</a>
          <a href="#"  className="btn btn-block btn-social btn-google-plus btn-flat"><i  className="fa fa-google-plus"></i> Sign up using Google+</a>
        </div>

        <a href="/pages/login"  className="text-center">I already have a membership</a>
      </div>
      {/* <!-- /.form-box --> */}
 
    </div>
    </>
  )
}
 