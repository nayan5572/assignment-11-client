
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const TabsCategory = () => {
    const [webData, setWebData] = useState([]);
    const [digital, setDigital] = useState([]);
    const [graphics, setGraphics] = useState([]);


    useEffect(() => {
        fetch('http://localhost:4000/webDevelopment')
            .then(res => res.json())
            .then(data => setWebData(data))

        // digital marketing data
        fetch('http://localhost:4000/digitalMarketing')
            .then(res => res.json())
            .then(data => setDigital(data))

        // graphics Design data
        fetch('http://localhost:4000/graphics')
            .then(res => res.json())
            .then(data => setGraphics(data))
    }, [])

    return (
        <div className='pt-8 container mx-auto text-center'>
            <h1 className='text-4xl font-bold'>Browse Job Category</h1>
            <div className='mt-8'>
                <Tabs>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Digital Marketing</Tab>
                        <Tab>Graphics Design</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                            {
                                webData.map(myDesign => <div key={myDesign._id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="card-header font-bold">{myDesign.jobTitle}</h2>
                                            <p className="text-content2 text-start"><span className='font-bold'>Deadline</span>: {myDesign.deadline}</p>
                                            <p className="text-content2 text-start"><span className='font-bold'>Salary</span>: {myDesign.priceRange}</p>
                                            <p className="text-content2 mt-2 text-start"><span className='font-bold'>description</span>: {myDesign.shortDescription}</p>
                                            <div className="card-footer">
                                                <button className="btn-secondary btn bg-green-400">Bid Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                            {
                                digital.map(myDesign => <div key={myDesign._id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="card-header font-bold">{myDesign.jobTitle}</h2>
                                            <p className="text-content2 text-start"><span className='font-bold'>Deadline</span>: {myDesign.deadline}</p>
                                            <p className="text-content2 text-start"><span className='font-bold'>Salary</span>: {myDesign.priceRange}</p>
                                            <p className="text-content2 mt-2 text-start"><span className='font-bold'>description</span>: {myDesign.shortDescription}</p>
                                            <div className="card-footer">
                                                <button className="btn-secondary btn bg-green-400">Bid Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                            {
                                graphics.map(myDesign => <div key={myDesign._id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h2 className="card-header font-bold">{myDesign.jobTitle}</h2>
                                            <p className="text-content2 text-start"><span className='font-bold'>Deadline</span>: {myDesign.deadline}</p>
                                            <p className="text-content2 text-start"><span className='font-bold'>Salary</span>: {myDesign.priceRange}</p>
                                            <p className="text-content2 mt-2 text-start"><span className='font-bold'>description</span>: {myDesign.shortDescription}</p>
                                            <div className="card-footer">
                                                <button className="btn-secondary btn bg-green-400">Bid Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TabsCategory;