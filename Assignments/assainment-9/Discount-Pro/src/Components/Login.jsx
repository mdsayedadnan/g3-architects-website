import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Navbar from "./Navbar";

const Login = () => {
    const { loginUser, setUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value
        const passward = event.target.passward.value;
        console.log(email, passward);

        loginUser(email, passward)

            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(location?.state ? location.state : "/")
                event.target.reset();


            })
            .catch(error => {
        console.log('error', error.message)
            })



    }
    return (
      <div>
        <Navbar></Navbar>
        
        <div className="hero bg-base-200 mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100  shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold p-5">Login Your Account now!</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="passward" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-accent font-bold text-xl">Login</button>
                        </div>
                    </form>
                    <div>
                        <p className="font-medium text-red-400 items-center flex justify-center p-5">Are you new here..?<Link to='/register'>  Register please!</Link></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
};

export default Login;