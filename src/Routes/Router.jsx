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
import PrivateRouter from "./PrivateRouter";
import AboutUs from "../Pages/Home/AboutUs/AboutUs";


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
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/addJob',
                element: <PrivateRouter><AddJobs></AddJobs></PrivateRouter>
            },
            {
                path: '/myPostedJob',
                element: <PrivateRouter><MyPostedJob></MyPostedJob></PrivateRouter>,
                loader: () => fetch(`https://assignment-11-jwt-server-teal.vercel.app/addJob`)
            },
            {
                path: '/addJob/:id',
                element: <UpdateJobs></UpdateJobs>,
                loader: ({ params }) => fetch(`https://assignment-11-jwt-server-teal.vercel.app/addJob/${params.id}`)
            },
            {
                path: '/myBids',
                element: <PrivateRouter><MyBids></MyBids></PrivateRouter>,
                loader: () => fetch('https://assignment-11-jwt-server-teal.vercel.app/bitWeb')
                
            },
            {
                path: '/bidRequest',
                element: <PrivateRouter><BidRequest></BidRequest></PrivateRouter>,
                loader: () => fetch('https://assignment-11-jwt-server-teal.vercel.app/bitWeb')
            },
            {
                path: '/tabsCategory',
                element: <TabsCategory></TabsCategory>
            },
            {
                path: '/webDevelopment/:id',
                element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`https://assignment-11-jwt-server-teal.vercel.app/webDevelopment/${params.id}`)
            },
            {
                path: '/graphicsDesign/:id',
                element: <GraphicsJobDetails></GraphicsJobDetails>,
                loader: ({ params }) => fetch(`https://assignment-11-jwt-server-teal.vercel.app/graphicsDesign/${params.id}`)
            },
            {
                path: '/digitalMar/:id',
                element: <DigitalMar></DigitalMar>,
                loader: ({ params }) => fetch(`https://assignment-11-jwt-server-teal.vercel.app/digitalMar/${params.id}`)
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