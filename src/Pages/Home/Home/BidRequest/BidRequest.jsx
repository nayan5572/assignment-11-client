import { Link, useLoaderData } from "react-router-dom";

const BidRequest = () => {
    const myBidRequest = useLoaderData();
    console.log(myBidRequest);
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
                                    <button className="btn btn-outline-error">Reject</button>
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