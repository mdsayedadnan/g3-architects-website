import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { IoMdHome } from "react-icons/io";
import { TbBrandSafari } from "react-icons/tb";

const Navbar = () => {
 
    const { user, logOut} = useContext(AuthContext)


    const links = <>

        <li><NavLink to='/'> <IoMdHome />Home</NavLink></li>
        <li><NavLink to='/brands'> <TbBrandSafari />Brands</NavLink></li>
        <li><NavLink to='/myProfile'>My Profile</NavLink></li>
        <li><NavLink to='/Coupon page'>Cupon page</NavLink></li>
        {
            <>
                <li><NavLink to='/about'> About Dev Profile</NavLink></li>

            </>

        }
    </>
    return (
        <div>
            <div className="navbar bg-amber-950 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Discount PRO</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        { links }
                    </ul>
                </div>
                <div className="navbar-end">

                    {user && user?.email ? (
                        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                          <div className="w-10 rounded-full">
                            <img
                              alt="Tailwind CSS Navbar component"
                              src={user.photoURL} />
                          </div>
                        </div>
                        <ul
                          tabIndex={0}
                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                          <li>
                            <a className="justify-between bg-black">
                             {user.email}
                              
                            </a>
                          </li>
                
                          <li>
                          <button onClick={logOut} className="btn btn-neutral rounded-none">
                            
                            Log-Out
                        </button>
                          </li>
                        </ul>
                      </div>
                   
                      
                     
                    ) : (
                        <Link to="/login" className="btn btn-neutral rounded-none">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;