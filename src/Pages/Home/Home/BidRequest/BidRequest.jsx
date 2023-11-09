import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../provider/AuthProvider";

const BidRequest = () => {
    const { user } = useContext(AuthContext);
    const myBidRequest = useLoaderData();
    const [deleteData, setDeleteData] = useState(myBidRequest);

    useEffect(() => {
        if (!user) {
            return
        }
        fetch(`https://assignment-11-jwt-server-teal.vercel.app/bitWeb/?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setDeleteData(data))
    }, [user]);



    const handleDelete = (_id) => {

        fetch(`https://assignment-11-jwt-server-teal.vercel.app/bitWeb/${_id}`, {
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
                        'Reject!',
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
                            <th></th>
                            <th>deadline</th>
                            <th>Job Title</th>
                            <th>Salary</th>
                            <th></th>
                            <th>Email</th>
                            <th>Request Bid</th>
                            <th>Reject Bid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBidRequest.map(postData => <tr key={postData.id}>
                                <th>{postData.category}</th>
                                <td>{postData.deadline}</td>
                                <td>{postData.jobTitle}</td>
                                <td>{postData.name}</td>
                                <td>{postData.maxPrice}</td>
                                <td>{postData.email}</td>
                                <td>
                                    <Link>
                                        <button className="btn btn-outline-success">Accept</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(postData._id)} className="btn btn-outline-error">Reject</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BidRequest;