import { Link } from "react-scroll";

const About = () => {
    return (
        <div className="w-full pt-16">
            <div className="relative hero w-full">
                <img className="w-full opacity-25 max-h-screen" src="https://i.ibb.co/zXpJ4HM/bg.jpg" alt="img" />
                <div className="absolute max-w-6xl mx-auto md:gap-20 rounded-xl md:flex justify-between md:flex-row-reverse items-center h-full  ">
                    <div className="md:w-1/2 p-5">
                        <img className="hover:scale-110 w-7/12 duration-500 rounded-full" src="https://i.ibb.co/vDJx30T/image.png" alt="banner" />
                    </div>
                    <div className=" md:w-1/2 p-5 md:p-0 space-y-10 mx-10">
                        <p className='text-4xl font-bold inline border-b-4 border-rose-600'>
                            About <span className="text-rose-500">Me</span>
                        </p>
                        <h5 className="text-xl text-justify">I am available for exciting opportunities to apply my passion and skills in front-end development, eager to contribute, learn, and grow in collaborative projects.</h5>
                        <div>
                            <Link to="contact" smooth={true} duration={500}><button className="btn btn-ghost hover:text-white outline outline-2 outline-rose-500 text-lg hover:bg-rose-500">Hire Me</button> </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;