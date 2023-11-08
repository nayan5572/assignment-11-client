// import { AiOutlineMail, FaPhone, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto flex justify-evenly pt-12">
            <div className="w-96 pt-12">
                <h1 className="text-4xl">Leave Us A Message</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
                <div className="space-y-10 mt-10">
                    <div className="flex items-center">
                        {/* <AiOutlineMail className="text-5xl text-orange-500"></AiOutlineMail> */}
                        <div className="ml-4">
                            <h1 className="text-2xl">Email Address:</h1>
                            <p>support@example.com</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {/* <FaPhone className="text-5xl text-orange-500"></FaPhone> */}
                        <div className="ml-4">
                            <h1 className="text-2xl">Phone Number:</h1>
                            <p>+98 12345 67890</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {/* <FaLocationDot className="text-5xl text-orange-500"></FaLocationDot> */}
                        <div className="ml-4">
                            <h1 className="text-2xl">Our Location:</h1>
                            <p>19/A, Mount View, Dhaka</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-96 mt-12">
                <div className="hero min-h-screen w-12">
                    <div className="hero-content flex-col w-[400px]">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" placeholder="Subject" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <textarea className="border p-4" name="" id="" cols="40" rows="5" placeholder="Write Your Message *"></textarea>

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-green-500 text-white hover:bg-white hover:border-green-500 hover:text-green-500">Submit Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;