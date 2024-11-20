import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../AuthProvider";

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [succes,setSucces]= useState(false)
    const [show, setShow] = useState(false)
    const { createNewUser, setUser ,googleSignIn} = useContext(AuthContext);


    const handleRegister = (event) => {
        event.preventDefault();
        console.log(event.target.email.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const passsward = event.target.passward.value;
        console.log(name, email, photo, passsward);
        setErrorMessage('')
        setSucces(false)
        if(passsward.length <6){
            setErrorMessage('Passward should be 6 characters');
            return
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passwordRegex.test(passsward)){
            setErrorMessage('Atlis 1 upper case 1 lower case')
            return
        }

        if(passsward.length <6){
            setErrorMessage('Passward should be 6 characters');
            return
        }
        createNewUser(email, passsward)
            .then(result => {
                const user = result.user;
                setUser(user)
                setSucces(true)
                navigate(location?.state ? location.state : "/")

                console.log(user);
            })
            .catch(error => {
                console.log('error',error.message);
                setErrorMessage(error.message);
                setSucces(false)

            })


    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-green-300 mt-10 w-11/12 mx-auto rounded-full">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card bg-base-100  shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body bg-slate-100" >
                            <h1 className="text-5xl font-bold p-5">Register Your Account now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="text" name="name" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />

                            </div>

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? 'text' : 'password'}
                                    placeholder="password"
                                    name="passward"
                                    className="input input-bordered" required />

                                <span onClick={() => setShow(!show)} className="btn btn-xs absolute right-6 top-12">

                                    {
                                        show ? <FaEyeSlash /> : <FaEye></FaEye>
                                    }
                                </span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent bg-green-300">Register</button>
                            </div>
                        </form>
                        {
                            errorMessage && <p className="text-red-600 flex justify-center items-center font-bold mt-5  rounded-full">{errorMessage}</p>
                        }

                    {
                        succes && <p className="text-green-700 flex justify-center items-center font-bold"> Successfully Register your account{succes}</p>
                    }
                        <div>
                            <p className="font-medium text-red-400 items-center flex justify-center p-5">You have An Account ? <Link to='/login'> Login</Link></p>
                            <span onClick={googleSignIn} className="btn btn-xs p-5 bg-green-600 mb-6 ml-10">Google Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;