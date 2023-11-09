
const ChoosePlan = () => {
    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-4xl text-center font-bold">Choose a plan that right for <br /> your business</h1>
                <p className="text-center mt-8">We collect reviews from our users so you can get an honest opinion of what an experience with our website are really like!
                </p>
            </div>
            <div className="flex justify-center mt-8">
                <div className="bg-white border shadow-lg rounded-lg p-6 mx-2">
                    <h2 className="text-xl font-semibold mb-4">Basic Plan</h2>
                    <p className="text-gray-600 mb-4">We collect reviews from our users so you can get an honest opinion of what an experience with our website.
                    </p>
                    <p className="text-3xl font-bold mb-4">Free</p>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Subscribe</button>
                </div>

                <div className="bg-white border shadow-lg rounded-lg p-6 mx-2">
                    <h2 className="text-xl font-semibold mb-4">Standard Plan</h2>
                    <p className="text-gray-600 mb-4">We collect reviews from our users so you can get an honest opinion of what an experience with our website.
                    </p>
                    <p className="text-3xl font-bold mb-4">$39/month</p>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Subscribe</button>
                </div>

                <div className="bg-white border shadow-lg rounded-lg p-6 mx-2">
                    <h2 className="text-xl font-semibold mb-4">Premium Plan</h2>
                    <p className="text-gray-600 mb-4">We collect reviews from our users so you can get an honest opinion of what an experience with our website.
                    </p>
                    <p className="text-3xl font-bold mb-4">$59/month</p>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default ChoosePlan;