import { Link } from "react-router-dom";
import error1 from '../../assets/error.jpg';

const ErrorPage = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center">
                <img className="w-[50rem]" src={error1} alt="" />
                <button className="btn bg-blue-500 text-white hover:bg-white hover:border-blue-500 hover:text-blue-500"><Link to="/">Go Back Home</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;