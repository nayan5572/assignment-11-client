import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";



const JobDetails = () => {
    const { user } = useContext(AuthContext);

    const myWebJob = useLoaderData();
    const { deadline, jobTitle, priceRange, shortDescription } = myWebJob;


    const handleBidSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;

        const booking = {
            name,
            deadline,
            jobTitle,
            shortDescription,
            email
        }

        fetch('https://assignment-11-jwt-server-teal.vercel.app/bitWeb', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Your job has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    };




    return (
        <div className="p-4 space-y-4 container mx-auto">
            {/* Display job details here */}
            <h1 className="text-2xl font-bold" name="jobName">Job Name: {jobTitle}</h1>
            <p className=""><span className="font-bold" name="descriptionS">Description:</span> {shortDescription}</p>
            {/* Other job details */}

            {/* Place Your Bid form */}
            <form onSubmit={handleBidSubmit}>
                <div className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Price (your bidding amount)"
                        className="w-full border rounded-md p-2"
                        defaultValue={priceRange}
                    />
                    <input
                        type="text"
                        name="deadline"
                        placeholder="Deadline"
                        className="w-full border rounded-md p-2"
                        defaultValue={deadline}
                    />
                    <input
                        type="text"
                        name="email"
                        // placeholder="Email (read-only)"
                        className="w-full border rounded-md p-2"
                        defaultValue={user?.email}
                        readOnly
                    />
                    <input
                        type="text"
                        placeholder="buyeremail@example.com"
                        className="w-full border rounded-md p-2"
                        defaultValue={user?.email}
                        readOnly
                    />
                    <button className="w-full btn bg-green-600 text-white font-bold">Bit on the Project</button>
                </div>
            </form>
        </div>
    );
};

export default JobDetails;