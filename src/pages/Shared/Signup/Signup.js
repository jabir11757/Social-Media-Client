import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Signup = () => {
  const {createUser} = useContext(AuthContext);

  const handleSignup=(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(err => console.error(err))

    console.log(name, email, password)
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
        <form onSubmit={handleSignup} className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-2">
              <input
                type="email"
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
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-outline">Login With Google</button>
            </div>
            <small className="text-center">Already have an account? <Link to='/login' className='text-primary font-bold'>Login</Link></small>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Signup;