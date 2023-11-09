import Banner from "../Banner/Banner";
import TabsCategory from "../TabsCategory/TabsCategory";
import ChoosePlan from "./ChoosePlan/ChoosePlan";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TabsCategory></TabsCategory>
            <div className="mt-12">
                <ChoosePlan></ChoosePlan>
            </div>
        </div>
    );
};

export default Home;