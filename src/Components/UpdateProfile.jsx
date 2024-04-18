import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";


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
        <div className="mt-12 mb-12">
            {/* <p className="3xl">Update Profile</p> */}
            <div className="hero">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Update Profile</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                <button className="btn btn-primary text-base font-semibold text-white">Update</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;