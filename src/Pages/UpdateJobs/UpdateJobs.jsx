import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const UpdateJobs = () => {
    const { user } = useContext(AuthContext);

    const myJobs = useLoaderData();
    const { _id, description, jobTitle, deadline, category, minPrice, maxPrice } = myJobs;


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const description = form.description.value;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;

        const myData2 = {
            email,
            description,
            jobTitle,
            deadline,
            category,
            minPrice,
            maxPrice
        }
        console.log(myData2);

        // send data to the server
        fetch(`http://localhost:4000/addJob/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myData2)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Updated!',
                        'Your file has been Successfully Updated.',
                        'success'
                    )
                }
            })
    }


    return (
        <div>
            <div className="max-w-md mx-auto my-8 p-4 border rounded-lg bg-white shadow-md">
                <h2 className="text-3xl font-semibold mb-4 text-center">Update Job</h2>
                <form onSubmit={handleUpdate}>
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
                        <input className="w-full border rounded-md p-2" type="text" defaultValue={jobTitle} name="jobTitle" required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">Deadline:</label>
                        <input className="w-full border rounded-md p-2" defaultValue={deadline} type="date" name="deadline" required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description:</label>
                        <textarea className="w-full border rounded-md p-2" name="description" defaultValue={description} rows="4" required></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Category:</label>
                        <select className="w-full border rounded-md p-2" name="category" defaultValue={category} required>
                            <option value="">Select:</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Graphics Design">Graphics Design</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            {/* Add more categories as needed */}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minPrice">Minimum price:</label>
                        <input className="w-full border rounded-md p-2" type="text" defaultValue={minPrice} name="minPrice" required />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxPrice">Maximum price:</label>
                        <input className="w-full border rounded-md p-2" type="text" defaultValue={maxPrice} name="maxPrice" required />
                    </div>

                    {/* <button
                        className="bg-green-500 text-white font-semibold py-2 px-4 w-full rounded-md hover:bg-green-700"
                        type="submit"
                    >
                        Update Job
                    </button> */}
                    <input className="bg-green-500 text-white font-semibold py-2 px-4 w-full rounded-md hover:bg-green-700" type="submit" value="Update Job" />
                </form>
            </div>
        </div>
    );
};

export default UpdateJobs;