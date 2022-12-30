import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";


const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/home';



  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        navigate(from, { replace: true })
      })
      .catch(err => console.error(err))

    console.log(email, password)
  }

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
        navigate(from, { replace: true })
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col w-1/2 lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl text-primary font-bold">EndGame Society</h1>
          <p className="py-6">
            EndGame Society helps you connect and share with the people in your life.
          </p>
        </div>
        <form onSubmit={handleLogin} className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                name="email"
                placeholder="Email address or phone number"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-2">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-2">
              <button onClick={handleGoogleSignIn} className="btn btn-outline">Login With Google</button>
            </div>
            <h1 className="text-center text-primary"><small><Link to='/'>Forgot password?</Link></small></h1>
            <div className="divider"></div>
            <button className="btn btn-success w-3/4 mx-auto"><Link to='/signup'>Create a new account</Link></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
