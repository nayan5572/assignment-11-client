import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const MyPostedJob = () => {
    const { user } = useContext(AuthContext);
    const loadedJobsData = useLoaderData();
    const [deleteData, setDeleteData] = useState(loadedJobsData);

    useEffect(() => {
        if (!user) {
            return
        }
        fetch(`http://localhost:4000/addJob/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setDeleteData(data))
    }, [user]);





    // handle delete data from server
    const handleDelete = (_id) => {

        fetch(`http://localhost:4000/addJob/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('deleted successfully', data);

                    // remove the user from the UI
                    const remainingUsers = deleteData && deleteData.filter(user => user._id !== _id);
                    setDeleteData(remainingUsers);
                    Swal.fire(
                        'Deleted!',
                        'Your Job has been deleted.',
                        'success'
                    )
                }
            })
    }




    return (
        <div className="container mx-auto">
            <div className="flex w-full overflow-x-auto">
                <table className="table">
                    <thead className="font-bold text-green-600">
                        <tr>
                            <th>Category</th>
                            <th>deadline</th>
                            <th>Job Title</th>
                            <th>Min Price</th>
                            <th>Max Price</th>
                            <th>Email</th>
                            <th>Update User</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            deleteData.map(postData => <tr key={postData.id}>
                                <th>{postData.category}</th>
                                <td>{postData.deadline}</td>
                                <td>{postData.jobTitle}</td>
                                <td>{postData.minPrice}</td>
                                <td>{postData.maxPrice}</td>
                                <td>{postData.email}</td>
                                <td>
                                    <Link to={`/updateJobs/${postData._id}`}>
                                        <button className="btn btn-outline-success">Update User</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(postData._id)} className="btn btn-circle border">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default MyPostedJob;