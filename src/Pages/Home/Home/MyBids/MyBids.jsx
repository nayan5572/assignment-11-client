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
                            <th></th>
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
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBids;