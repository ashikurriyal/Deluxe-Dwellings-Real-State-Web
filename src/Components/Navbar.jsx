import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";



const Navbar = () => {


    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.error(error))
    }

    const navLinks = <>
        <li className="text-xl font-medium"><NavLink to="/" style={({ isActive }) => {
            return isActive ? { backgroundColor: 'white', color: 'rgb(2 132 199)', fontWeight: '600', borderColor: 'rgb(2, 132, 199)', borderWidth: '2px', borderStyle: 'solid' } : {}
        }}>Home</NavLink></li>

        <li className="text-xl font-medium"><NavLink to="/updateProfile" style={({ isActive }) => {
            return isActive ? { backgroundColor: 'white', color: 'rgb(2 132 199)', fontWeight: '600', borderColor: 'rgb(2, 132, 199)', borderWidth: '2px', borderStyle: 'solid' } : {}
        }}>Update Profile</NavLink></li>

        <li className="text-xl font-medium"><NavLink to="/booking" style={({ isActive }) => {
            return isActive ? { backgroundColor: 'white', color: 'rgb(2 132 199)', fontWeight: '600', borderColor: 'rgb(2, 132, 199)', borderWidth: '2px', borderStyle: 'solid' } : {}
        }}>Booking</NavLink></li>

        {
            user &&
            <>
                <li className="text-xl font-medium"><NavLink to="/userProfile" style={({ isActive }) => {
                    return isActive ? { backgroundColor: 'white', color: 'rgb(2 132 199)', fontWeight: '600', borderColor: 'rgb(2, 132, 199)', borderWidth: '2px', borderStyle: 'solid' } : {}
                }}>User Profile</NavLink></li>
            </>
        }

    </>
    return (
        <div className="navbar bg-base-100 p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="font-bold lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-600 to-blue-800">Deluxe Dwellings</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    user ? <>
                        {
                            user?.photoURL ?
                                <div className="tooltip tooltip-bottom avatar" data-tip={user.displayName}>
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user.photoURL} />
                                    </div>
                                </div> :

                                <div className="tooltip tooltip-bottom avatar" data-tip={user?.displayName}>
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                        }
                        {/* <span>{user.email}</span> */}


                        <a onClick={handleLogOut} className="btn bg-sky-500  text-base font-medium">Sign Out</a>
                    </>
                        : <Link to="/login"><button className="btn bg-sky-500  text-base font-medium">Log In</button></Link>
                }


            </div>
        </div>
    );
};

export default Navbar;