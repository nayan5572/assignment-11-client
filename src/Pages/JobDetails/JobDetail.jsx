
const JobDetail = ({ myJobs }) => {
    const { jobTitle, deadline, priceRange, shortDescription } = myJobs;
    return (
        <div>
            <h2>Job Details</h2>
            <p>Name: {jobTitle}</p>
            <p>Deadline: {deadline}</p>
            <p>Price Range: {priceRange}</p>
            <p>Description: {shortDescription}</p>
        </div>
    );
};

export default JobDetail;