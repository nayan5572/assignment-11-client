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
import TabsCategory from "../Pages/Home/TabsCategory/TabsCategory";
import JobDetails from "../Pages/JobDetails/JobDetails";
import UpdateJobs from "../Pages/UpdateJobs/UpdateJobs";
import GraphicsJobDetails from './../Pages/GraphicsJobDetails/GraphicsJobDetails';
import DigitalMar from "../Pages/DigitalMar/DigitalMar";
import Contact from "../Pages/Home/Contact/Contact";


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
                element: <MyPostedJob></MyPostedJob>,
                loader: () => fetch(`http://localhost:4000/addJob`)
            },
            {
                path: '/addJob/:id',
                element: <UpdateJobs></UpdateJobs>,
                // loader: ({ params }) => fetch(`http://localhost:4000/addJob/${params.id}`)
                loader: ({ params }) => fetch(`http://localhost:4000/addJob/${params.id}`)
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
                path: '/tabsCategory',
                element: <TabsCategory></TabsCategory>
            },
            {
                path: '/webDevelopment/:id',
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`http://localhost:4000/webDevelopment/${params.id}`)
            },
            {
                path: '/graphicsDesign/:id',
                element: <GraphicsJobDetails></GraphicsJobDetails>,
                loader: ({ params }) => fetch(`http://localhost:4000/graphicsDesign/${params.id}`)
            },
            {
                path: '/digitalMar/:id',
                element: <DigitalMar></DigitalMar>,
                loader: ({ params }) => fetch(`http://localhost:4000/digitalMar/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contactUs',
                element: <Contact></Contact>
            },
        ]
    },
]);

export default router;