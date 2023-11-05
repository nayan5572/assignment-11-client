

const Banner = () => {

    return (
        <div className="relative bg-cover bg-center h-[50rem] md:h-[50rem] mt-4" style={{ backgroundImage: "url('https://i.ibb.co/PQwMmmv/1.jpg')" }}>
            {/* <div className="hero-overlay bg-opacity-60 h-[850px]"></div> */}
            <div className="absolute inset-0 bg-black opacity-50 h-[800px]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-7 text-center">
                    {/* <p className="text-4xl text-green-400">Start learning from home</p> */}
                    <h2 className="text-7xl font-bold text-white">We are <span className="text-green-500">Updated</span> <br />IT Agency Since 2023</h2>
                    <p className="text-2xl text-white">Find Your Online IT Job Here, We assured You Do not Worry</p>
                    <div className="">
                        <button className="btn btn-primary mr-4 border-0 text-white bg-green-500 hover:bg-white hover:text-green-500">Contact Us</button>
                        <button className="btn btn-outline bg-white text-green-500 border-0 hover:bg-green-500 hover:text-white hover:border-0">Find IT Jobs</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;

// https://i.ibb.co/PQwMmmv/1.jpg
// https://i.ibb.co/qrLfVXb/2.jpg
// https://i.ibb.co/dLPmw3n/we-are-e.jpg