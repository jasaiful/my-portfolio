import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
// import surveyMaster from '../assets/projects/Survey Master.JPG'
// import careerCenter from '../assets/projects/Career Center.JPG'
// import fruitBurst from '../assets/projects/Fruit Burst.JPG'
// import courseRegistration from '../assets/projects/Course Registration.JPG'
// import brandShop from '../assets/projects/Brand Shop.JPG'

const Projects = () => {

    return (
        <div className='max-w-6xl mx-auto pt-20 max-h-screen'>
            <div>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-rose-600'>
                        Recent Projects
                    </p>
                    <p className='py-3'>Check out some of my recent work</p>
                </div>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div id="slide1" className="carousel-item relative w-full">
                            <img className="w-full rounded-xl" src='https://i.ibb.co/fNfPFgP/Brand-Shop.jpg' alt="project_img" />
                            <div className="absolute rounded-xl flex items-center justify-end h-full hero-overlay bg-opacity-40">
                                <div className='text-white space-y-7 text-right pr-12'>
                                    <h2 className='text-6xl className  font-bold'>Dynamic React Application</h2>
                                    <div>

                                        <a href="https://github.com/jasaiful/brand-shop-client/" target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-primary mr-5">Code</button>
                                        </a>

                                        <a href="https://brand-shop-c7580.web.app/" target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-secondary mr-5">Live</button>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;