import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddJobs = () => {
    const { user } = useContext(AuthContext);


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const description = form.description.value;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;

        const myData = {
            email,
            description,
            jobTitle,
            deadline,
            category,
            minPrice,
            maxPrice
        }

        fetch('https://assignment-11-jwt-server-teal.vercel.app/addJob', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your Job Successfully Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <div className="max-w-md mx-auto my-8 p-4 border rounded-lg bg-white shadow-md">
                <h2 className="text-3xl font-semibold mb-4 text-center">Add Job</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employerEmail">Email of the employer:</label>
                        <input
                            className="w-full border rounded-md p-2"
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            readOnly
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobTitle">Job title:</label>
                        <input className="w-full border rounded-md p-2" type="text" name="jobTitle" required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">Deadline:</label>
                        <input className="w-full border rounded-md p-2" type="date" name="deadline" required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description:</label>
                        <textarea className="w-full border rounded-md p-2" name="description" rows="4" required></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Category:</label>
                        <select className="w-full border rounded-md p-2" name="category" required>
                            <option value="">Select:</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Graphics Design">Graphics Design</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            {/* Add more categories as needed */}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minPrice">Minimum price:</label>
                        <input className="w-full border rounded-md p-2" type="text" name="minPrice" required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxPrice">Maximum price:</label>
                        <input className="w-full border rounded-md p-2" type="text" name="maxPrice" required />
                    </div>

                    <button
                        className="bg-green-500 text-white font-semibold py-2 px-4 w-full rounded-md hover:bg-green-700"
                        type="submit"
                    >
                        Add Job
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddJobs;