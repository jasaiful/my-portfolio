import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
                    {/* slide-1 */}
                    <SwiperSlide>
                        <div id="slide1" className="carousel-item relative px-6 md:px-1 w-full">
                            <img className="w-full rounded-xl" src='https://i.ibb.co/fNfPFgP/Brand-Shop.jpg' alt="project_img" />
                            <div className="absolute rounded-xl flex items-center justify-end h-full hero-overlay bg-opacity-40">
                                <div className='text-white space-y-7 text-right pr-12'>
                                    <h2 className='text-4xl className  font-bold'>Brand Shop by React App</h2>
                                    <div>
                                        <a href="https://github.com/jasaiful/brand-shop-client.git" target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-ghost hover:text-white outline outline-2 outline-rose-500 mr-5 text-lg hover:bg-rose-500">Code</button>
                                        </a>

                                        <a href="https://brand-shop-c7580.web.app/" target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-ghost hover:text-white outline outline-2 outline-rose-500 text-lg hover:bg-rose-500">Live</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* slide-2 */}
                    <SwiperSlide>
                        <div id="slide2" className="carousel-item relative px-6 md:px-1 w-full">
                            <img className="w-full rounded-xl" src='https://i.ibb.co/kxgSwtg/Fruit-Burst.jpg' alt="project_img" />
                            <div className="absolute rounded-xl flex items-center justify-end h-full hero-overlay bg-opacity-40">
                                <div className='text-white space-y-7 text-right pr-12'>
                                    <h2 className='text-4xl className  font-bold'>E-commerce Site by Tailwind CSS </h2>
                                    <div>
                                        <a href="https://github.com/jasaiful/A3-fruit-brust.git" target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-ghost hover:text-white outline outline-2 outline-rose-500 mr-5 text-lg hover:bg-rose-500">Code</button>
                                        </a>

                                        <a href="https://frolicking-seahorse-8d0e1e.netlify.app/" target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-ghost hover:text-white outline outline-2 outline-rose-500 text-lg hover:bg-rose-500">Live</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* slide-3 */}
                    <SwiperSlide>
                        <div id="slide3" className="carousel-item relative px-6 md:px-1 w-full">
                            <img className="w-full rounded-xl" src='https://i.ibb.co/SvHBhvC/Course-Registration.jpg' alt="project_img" />
                            <div className="absolute rounded-xl flex items-center justify-end h-full hero-overlay bg-opacity-40">
                                <div className='text-white space-y-7 text-right pr-12'>
                                    <h2 className='text-4xl className  font-bold'>Course Registration Site by JavaScript</h2>
                                    <div>
                                        <a href="https://github.com/jasaiful/course-registration.git" target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-ghost hover:text-white outline outline-2 outline-rose-500 mr-5 text-lg hover:bg-rose-500">Code</button>
                                        </a>

                                        <a href="https://fastidious-jelly-158599.netlify.app/" target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-ghost hover:text-white outline outline-2 outline-rose-500 text-lg hover:bg-rose-500">Live</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* slide-4 */}
                    <SwiperSlide>
                        <div id="slide4" className="carousel-item relative px-6 md:px-1 w-full">
                            <img className="w-full rounded-xl" src='https://i.ibb.co/w6k3cbT/Career-Center.jpg' alt="project_img" />
                            <div className="absolute rounded-xl flex items-center justify-end h-full hero-overlay bg-opacity-40">
                                <div className='text-white space-y-7 text-right pr-12'>
                                    <h2 className='text-4xl className  font-bold'>Career Site by React App</h2>
                                    <div>
                                        <a href="https://github.com/jasaiful/career_center_client.git/" target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-ghost hover:text-white outline outline-2 outline-rose-500 mr-5 text-lg hover:bg-rose-500">Code</button>
                                        </a>

                                        <a href="https://neon-baklava-ee1d7f.netlify.app/" target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-ghost hover:text-white outline outline-2 outline-rose-500 text-lg hover:bg-rose-500">Live</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* slide-5 */}
                    <SwiperSlide>
                        <div id="slide5" className="carousel-item relative px-6 md:px-1 w-full">
                            <img className="w-full rounded-xl" src='https://i.ibb.co/5WCwqSv/Survey-Master.jpg' alt="project_img" />
                            <div className="absolute rounded-xl flex items-center justify-end h-full hero-overlay bg-opacity-40">
                                <div className='text-white space-y-7 text-right pr-12'>
                                    <h2 className='text-4xl className  font-bold'>Dynamic Survey Site by React</h2>
                                    <div>
                                        <a href="https://github.com/jasaiful/survey-master-client.git/" target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-ghost hover:text-white outline outline-2 outline-rose-500 mr-5 text-lg hover:bg-rose-500">Code</button>
                                        </a>

                                        <a href="https://surveymaster-96ecd.web.app/" target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-ghost hover:text-white outline outline-2 outline-rose-500 text-lg hover:bg-rose-500">Live</button>
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