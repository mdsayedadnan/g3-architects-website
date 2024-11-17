import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = (event) =>{
        event.preventDefault();
   
        const email = event.target.email.value
        const passward = event.target.passward.value;
        console.log(email,passward);
   
        singInUser(email,passward)
        .then(result =>{
         console.log(result.user);
         event.target.reset();
         Navigate('/Orders')
   
        })
        .catch(error =>{
         console.log('error',error.message);
        })
   
   
   
       }
    return (
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
                        <button className="btn btn-accent">Register</button>
                    </div>
                </form>
                <div>
                    <p className="font-medium text-red-400 items-center flex justify-center p-5">You have An Account ? <Link to='/register'> Login</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;