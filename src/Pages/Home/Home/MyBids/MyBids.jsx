import { Link, useLoaderData } from "react-router-dom";

const MyBids = () => {
    const myBidData = useLoaderData();
    console.log(myBidData);
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myBidData.map(postData => <tr key={postData.id}>
                                <th>{postData.category}</th>
                                <td>{postData.deadline}</td>
                                <td>{postData.jobTitle}</td>
                                <td>{postData.name}</td>
                                <td>{postData.maxPrice}</td>
                                <td>{postData.email}</td>
                                <td>
                                    <Link>
                                        <button className="btn btn-outline-success">Requests Bid</button>
                                    </Link>
                                </td>
                                <td>
                                    {/* <button onClick={() => handleDelete(postData._id)} className="btn btn-circle border">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button> */}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBids;