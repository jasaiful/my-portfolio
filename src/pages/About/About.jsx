import { Link } from "react-router-dom";


const About = () => {
    return (
        <div>
            <div className="w-full">
                <div className="relative hero w-full">
                    <img className="w-full max-h-screen" src="https://i.ibb.co/BgTySh5/bg-banner.jpg" alt="img" />
                    <div className="absolute rounded-xl flex items-center justify-end h-full  ">
                        <div className="space text-right pr-6">
                            <h3>Hello, I'm</h3>
                            <h1 className="text-4xl font-extrabold mb-4">About</h1>
                            <h5>Front-End Developer From Bangladesh</h5>
                            <p className="text-lg mb-6">I'm a budding front-end developer in Bangladesh, passionate about crafting immersive web experiences</p>
                            <p className="text-lg mb-6">My mission is to craft exceptional websites that stand out from the rest.</p>
                            <Link> <button className="btn btn-secondary">Explore</button> </Link>
                        </div>
                        <div>
                            <img className=" hover:translate-x-4 rounded-full" src="https://i.ibb.co/rvQCWby/Banner.png" alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;