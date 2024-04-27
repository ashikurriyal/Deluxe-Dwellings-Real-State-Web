import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";


const Booking = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="mt-6 mb-12">
            <Helmet>
                <title>
                    Deluxe Dwellings | Booking
                </title>
            </Helmet>
            {/* <p className="3xl">Update Profile</p> */}
            <div className="hero">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left" data-aos="fade-left"
                        data-aos-duration="2000">
                        <h1 className="text-5xl font-bold text-sky-500 mb-4">Booking Information</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-aos="fade-right"
                        data-aos-duration="2000">
                        <form /* onSubmit={handleBooking} */ className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Email</span>
                                </label>
                                <input type="text" name="email" placeholder={user.email} className="input input-bordered" disabled />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Name</span>
                                </label>
                                <input type="text" name="displayName" placeholder={user.displayName} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Booking Info</span>
                                </label>
                                <input type="text" name="photoURL" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-sky-500 text-base font-semibold text-white">Book Now</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;