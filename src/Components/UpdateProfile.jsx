import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {

    const { user } = useContext(AuthContext)

    const handleUpdateProfile = e => {
        const displayName = e.target.displayName.value;
        const photoURL = e.target.photoURL.value;


        if (user) {
            updateProfile(user, {
                displayName: displayName,
                photoURL: photoURL

            })
                .then(result => {
                    console.log(result.user)
                    e.target.reset()
                })
                .catch(error => console.error(error))
        }

    }
    return (
        <div className="mt-6 mb-12">
            <Helmet>
                <title>
                    Deluxe Dwellings | Update Profile
                </title>
            </Helmet>
            
            <div className="hero">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left" data-aos="fade-down"
                        data-aos-duration="2000">
                        <h1 className="text-5xl font-bold text-sky-500 mb-4">Update Profile</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-aos="fade-up"
                        data-aos-duration="2000">
                        <form onSubmit={handleUpdateProfile} className="card-body">
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
                                    <span className="label-text text-lg font-semibold">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-sky-500 text-base font-semibold text-white">Update</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;