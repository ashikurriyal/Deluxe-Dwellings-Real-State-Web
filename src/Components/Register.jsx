import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const Register = () => {

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, name)

        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)
        ) {
            toast.error('Password Must be Contain One Uppercase and One Lowercase Letter')
            return
        }


        //create user in firebase

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Registraion Success')
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero">
            <Helmet>
                <title>
                    Deluxe Dwellings | Register
                </title>
            </Helmet>
            <div className="hero-content flex-col lg:w-[480px]">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                        </div> */}
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
                            <button className="btn btn-primary text-lg font-semibold text-white">Register</button>
                        </div>
                    </form>

                    <p className="text-center text-base font-medium">Already have account?
                        <span>
                            <Link to="/login">
                                <button className="btn btn-link text-base font-medium">Login</button>
                            </Link>
                        </span>
                    </p>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;