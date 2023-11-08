import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import img1 from '../../../assets/vvbb.png';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // logOut
    const handleLogOut = () => {
        logOutUser()
            .then()
            .catch()
    }

    return (
        <nav className="bg-green-600 p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo and Site Name */}
                <Link to='/'>
                    <div className="flex items-center">
                        <img src={img1} alt="Logo" className="w-10 h-10 mr-2 rounded-lg" />
                        <span className="text-white text-lg font-semibold">IT Jobs</span>
                    </div>
                </Link>

                {/* Hamburger Menu (Small Devices) */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white hover:text-yellow-300 p-2 focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Login Button (Small Devices) */}
                <div className="md:hidden">
                    <Link to="/login" className="text-white hover:text-yellow-300">
                        Login
                    </Link>
                </div>

                {/* Navigation Links (Medium and Large Devices) */}
                <ul className="hidden md:flex space-x-12 font-bold">
                    <li>
                        <Link to="/" className="text-white hover-text-yellow-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/addJob" className="text-white hover-text-yellow-300">Add Job</Link>
                    </li>
                    <li>
                        <Link to="/myPostedJob" className="text-white hover-text-yellow-300">My Posted Jobs</Link>
                    </li>
                    <li>
                        <Link to="/myBids" className="text-white hover-text-yellow-300">My Bids</Link>
                    </li>
                    <li>
                        <Link to="/bidRequest" className="text-white hover-text-yellow-300">Bid Requests</Link>
                    </li>
                    <li>
                        <Link to="/contactUs" className="text-white hover-text-yellow-300">Contact Us</Link>
                    </li>
                </ul>

                {/* User Profile Section (Medium and Large Devices) */}
                {
                    user ?
                        <>
                            <div className="hidden md:flex items-center space-x-4">
                                {/* <img src="profile.jpg" alt="User" className="w-8 h-8 rounded-full" /> */}
                                <span className="text-white font-semibold">{user.displayName}</span>
                                <span className="mr-8"><img className="rounded-full w-10" src={user.photoURL} alt="" /></span>
                                <a onClick={handleLogOut} className="btn bg-green-500 text-white hover:bg-green-500">Sign Out</a>

                            </div>
                        </>
                        :
                        <>
                            <Link to="/login" className="hidden md:block text-white hover-text-yellow-300">
                                Login/Register
                            </Link>
                        </>
                }

                {/* Register/Login Link (Medium and Large Devices) */}

            </div>

            {/* Mobile Menu (Hidden by default on medium and large devices) */}
            <ul className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <li>
                    <Link to="/" className="text-white hover-text-yellow-300 block py-2">Home</Link>
                </li>
                <li>
                    <Link to="/add-job" className="text-white hover-text-yellow-300 block py-2">Add Job</Link>
                </li>
                <li>
                    <Link to="/my-posted-jobs" className="text-white hover-text-yellow-300 block py-2">My Posted Jobs</Link>
                </li>
                <li>
                    <Link to="/my-bids" className="text-white hover-text-yellow-300 block py-2">My Bids</Link>
                </li>
                <li>
                    <Link to="/bid-requests" className="text-white hover-text-yellow-300 block py-2">Bid Requests</Link>
                </li>
                <li>
                    <Link to="/contactUs" className="text-white hover-text-yellow-300 block py-2">Contact Us</Link>
                </li>
                <li>
                    <Link to="/login" htmlFor="modal-1" className="text-white hover-text-yellow-300 block py-2">
                        <label className="btn btn-primary" htmlFor="modal-1">Sign In</label>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;


// w-10/12 mx-auto