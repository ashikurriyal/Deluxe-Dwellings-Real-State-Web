import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";


const Login = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    console.log(signInWithGoogle)

    //login handle
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email, password)
            
        .then(result => {
            console.log(result.user)
            navigate('/')
            e.target.reset()
        })
            .catch(error => console.error(error))
    }

    //Continue with google handle
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            
            .catch(error => console.error(error))
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:w-[480px] ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login Now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-lg font-semibold text-white">Login</button>
                        </div>

                    </form>

                    <div className="form-control">
                        <button onClick={handleGoogleSignIn} className="rounded-xl p-3 m-7 mt-0 text-white bg-sky-700 text-lg font-semibold">Continue with Google</button>
                    </div>

                    <p className="text-center text-base font-semibold">New Here? Please
                        <span>
                            <Link to="/register">
                                <button className="btn btn-link text-base font-semibold">Register</button>
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;