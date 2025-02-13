import Checkbox from "@/components/UI/input/inputChackbox";



export default function Register(){

  return (
    <>
       <body  className="register-page">
    <div  className="register-box">
      <div  className="register-logo">
        <a href="../../index2.html"><b>Admin</b>LTE</a>
      </div>

      <div  className="register-box-body">
        <p  className="login-box-msg">Register a new membership</p>
        <form action="../../index.html" method="post">
          <div  className="form-group has-feedback">
            <input type="text"  className="form-control" placeholder="Full name"/>
            <span  className="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div  className="form-group has-feedback">
            <input type="text"  className="form-control" placeholder="Email"/>
            <span  className="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div  className="form-group has-feedback">
            <input type="password"  className="form-control" placeholder="Password"/>
            <span  className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div  className="form-group has-feedback">
            <input type="password"  className="form-control" placeholder="Retype password"/>
            <span  className="glyphicon glyphicon-log-in form-control-feedback"></span>
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

        <a href="login.html"  className="text-center">I already have a membership</a>
      </div>
      {/* <!-- /.form-box --> */}
    </div>
    {/* <!-- /.register-box --> */}

    {/* <!-- jQuery 2.1.3 --> */}
    <script src="../../plugins/jQuery/jQuery-2.1.3.min.js"></script>
    {/* <!-- Bootstrap 3.3.2 JS --> */}
    <script src="../../bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    {/* <!-- iCheck --> */}
    <script src="../../plugins/iCheck/icheck.min.js" type="text/javascript"></script>
    
  </body>

    </>
  )
}
 