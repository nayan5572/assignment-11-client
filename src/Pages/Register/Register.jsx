import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');

    // button click here
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, photo, email, password);

        // Show error and Success message
        setRegisterError('')

        // condition
        if (password.length < 6) {
            setRegisterError('Password Should be at least 6 characters or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your Password should have at least one upper case characters');
        }


        toast.success('Your Registration is Successfully', {
            position: toast.POSITION.TOP_RIGHT,
        });


        //create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                //
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                });
                window.location.reload(true)
                    .then(() => console.log("Update Profile"))
                    .catch(error => console.error(error))


            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-4 text-center">Sign Up</h2>

                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full border border-gray-300 rounded p-3 focus:outline-none"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full border border-gray-300 rounded p-3 focus:outline-none"
                            placeholder="Your Email"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full border border-gray-300 rounded p-3 focus:outline-none"
                            placeholder="Your Password"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="photo" className="block text-gray-600 text-sm font-semibold mb-2">Photo URL</label>
                        <input
                            type="text"
                            name="photo"
                            className="w-full border border-gray-300 rounded p-3 focus:outline-none"
                            placeholder="URL of Your Photo"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-green-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-600 w-full focus:outline-none"
                    >
                        Sign Up
                    </button>
                </form>
                {
                    registerError && <p className="text-red-500 text-center mt-4">{registerError}</p>
                }
                <div className="mt-4">
                    have already account? <Link to="/login" className="text-green-500 hover:underline">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;