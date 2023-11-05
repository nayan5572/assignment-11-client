import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import AddJobs from "../Pages/Home/About/AddJobs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyPostedJob from "../Pages/Home/MyPostedJob/MyPostedJob";
import MyBids from "../Pages/Home/Home/MyBids/MyBids";
import BidRequest from "../Pages/Home/Home/BidRequest/BidRequest";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addJob',
                element: <AddJobs></AddJobs>
            },
            {
                path: '/myPostedJob',
                element: <MyPostedJob></MyPostedJob>
            },
            {
                path: '/myBids',
                element: <MyBids></MyBids>
            },
            {
                path: '/bidRequest',
                element: <BidRequest></BidRequest>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default router;