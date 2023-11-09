import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
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

    const handleBidReqSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const description = form.description.value;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const category = form.category.value;
        const maxPrice = form.maxPrice.value;

        const myBidsData = {
            email,
            description,
            jobTitle,
            deadline,
            category,
            maxPrice
        }
        console.log("My Data", myBidsData);

        fetch('https://assignment-11-jwt-server-teal.vercel.app/myBids', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    return (
        <div className="container mx-auto">
            <div className="flex w-full overflow-x-auto">
                <form className="table" onSubmit={handleBidReqSubmit}>
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
                                deleteData.map(postData => <tr key={postData.id}>
                                    <th name='category'>{postData.category}</th>
                                    <td name='deadline'>{postData.deadline}</td>
                                    <td name='jobTitle'>{postData.jobTitle}</td>
                                    <td name='name'>{postData.name}</td>
                                    <td name='maxPrice'>{postData.maxPrice}</td>
                                    <td name='email'>{postData.email}</td>
                                    <td>
                                        <button className="btn btn-outline-success">Accept</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(postData._id)} className="btn btn-outline-error">Reject</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default BidRequest;