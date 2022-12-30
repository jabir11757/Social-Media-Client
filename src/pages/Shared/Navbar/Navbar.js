import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (

        <div>
            {
                user &&
                <div className="navbar bg-base-100 ">
                    <div className="flex-1">
                        <Link className="text-3xl text-primary font-bold" to='/home'>EndGame Society</Link>
                    </div>

                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="flex-none">
                        {
                            user &&
                            <ul className="menu menu-horizontal px-1">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/media'>Media</Link></li>
                                <li> <Link to='/message'>Message</Link></li>
                                <li><Link to='/about'>About</Link></li>
                            </ul>
                        }

                        {
                            user ?
                                <>
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user?.photoURL} alt='' />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                            <li><Link> Profile</Link></li>
                                            <li><Link>Settings</Link></li>
                                            <li onClick={handleLogout}><Link>Logout</Link></li>
                                        </ul>
                                    </div>
                                </> :
                                <button className='btn btn-outline'><Link to='/'>Login</Link></button>

                        }
                    </div>
                </div>
            }
        </div>

    );
};

export default Navbar;