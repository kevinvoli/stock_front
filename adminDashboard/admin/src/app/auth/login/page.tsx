"use client";

import Checkbox from "@/components/UI/input/inputChackbox";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return (
      <div>
        <p>Bienvenue {session.user?.email}</p>
     
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent)=>{
    e.preventDefault();
    setError(null); // Réinitialiser l'erreur avant l'envoi
    console.log("form:", email, "  ", password);

    setTimeout(()=> console.log("des truc peuvent sortir"),10000)
    
    try {

      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!response || response.error) {
        throw new Error(response?.error || "Échec de connexion");
      }
      console.log("Connexion réussie !");
    } catch (err: any) {
      console.error("Erreur de connexion:", err);
      setError(err.message); // Stocker le message d'erreur
    }

    
  }
  return (
    <>
<body  className="login-page">
  <div  className="login-box">
    <div  className="login-logo">
      <a href="../../index2.html"><b>Admin</b>LTE</a>
    </div>
    {/* <!-- /.login-logo --> */}
    <div  className="login-box-body">
      <p  className="login-box-msg">Sign in to start your session</p>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} method="post">
        <div  className="form-group has-feedback">
          <input type="email" onChange={(e)=>setEmail(e.target.value)}  className="form-control" placeholder="Email"/>
          <span  className="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div  className="form-group has-feedback">
          <input type="password" onChange={(e)=>setPassword(e.target.value)}  className="form-control" placeholder="Password"/>
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
            <button type="submit"  className="btn btn-primary btn-block btn-flat">Sign In</button>
          </div>
        {/* <!-- /.col --> */}
        </div>
      </form>

      <div  className="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#"  className="btn btn-block btn-social btn-facebook btn-flat"><i  className="fa fa-facebook"></i> Sign in using Facebook</a>
      <a href="#"  className="btn btn-block btn-social btn-google-plus btn-flat"><i  className="fa fa-google-plus"></i> Sign in using Google+</a>
      </div>
      {/* <!-- /.social-auth-links --> */}

      <a href="#">I forgot my password</a><br/>
      <a href="register.html"  className="text-center">Register a new membership</a>

    </div>
    {/* <!-- /.login-box-body --> */}
    
  </div>
  {/* <!-- /.login-box --> */}

  {/* <!-- jQuery 2.1.3 --> */}
  <script src="/plugins/jQuery/jQuery-2.1.3.min.js"></script>
  {/* <!-- Bootstrap 3.3.2 JS --> */}
  <script src="/js/bootstrap.min.js" type="text/javascript"></script>
  {/* <!-- iCheck --> */}
  <script src="/plugins/iCheck/icheck.min.js" type="text/javascript"></script>

</body>

    </>
  )
}

 