import { Link } from 'react-router-dom';
import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className="w-full">
            <div className="md:relative hero w-full">
                <img className="hidden sm:block w-full md:max-h-screen" src="https://i.ibb.co/BgTySh5/bg-banner.jpg" alt="img" />
                <div className="md:absolute max-w-6xl mx-auto rounded-xl md:flex items-center justify-end h-full">
                    <div className="md:w-1/2 p-5">
                        <img className="hover:scale-110 duration-500 rounded-b-full" src="https://i.ibb.co/rvQCWby/Banner.png" alt="banner" />
                    </div>
                    <div className="md:w-1/2 px-5 md:p-0 space-y-5 mx-10">
                        <h3 className="text-rose-600 font-semibold text-3xl">Hello, I'm</h3>
                        <h1 className="text-6xl font-semibold mb-4">Julfiker Ali</h1>
                        <h5 className="text-2xl"> A Creative <span className="text-rose-600 font-semibold">Front-End Developer</span> From <span className="text-green-600 font-semibold">Bangladesh</span></h5>
                        <p className="text-lg mb-6">I am a budding front-end developer in Bangladesh, passionate about crafting immersive web experiences <br />&<br /> my mission is to craft exceptional websites that stand out from the rest.</p>
                        <div className="flex flex-col md:flex-row gap-8 md:justify-between items-center">
                            <Link to="contact" smooth={true} duration={500}><button className="btn btn-ghost hover:text-white outline outline-2 outline-rose-500 text-lg hover:bg-rose-500">Get in Touch <FaArrowRight /></button></Link>
                            <div className="flex text-2xl md:text-4xl gap-4 md:gap-5">
                                <Link to="https://www.linkedin.com/in/julfikerali/" className="text-blue-800"><FaLinkedin /></Link>
                                <Link to="https://www.facebook.com/julfikarsaiful/" className="text-blue-900"><FaFacebook /></Link>
                                <Link to="https://github.com/jasaiful"><FaGithub /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
