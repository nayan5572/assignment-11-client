import img1 from '../../../assets/1.jpg';
import Slider from 'react-slick';


const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='mt-8'>
            <div className='container mx-auto'>
                <Slider {...settings}>
                    <div>
                        <h3>
                            <img className='w-[70rem] h-[35rem]' src={img1} alt="" />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <img className='w-[70rem] h-[35rem]' src={img1} alt="" />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <img className='w-[70rem] h-[35rem]' src={img1} alt="" />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <img className='w-[70rem] h-[35rem]' src={img1} alt="" />
                        </h3>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Banner;