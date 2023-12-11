import { Link } from 'react-scroll';
import About from '../components/About';
import Banner from '../components/Banner';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';


const Home = () => {
    const navLinks = (
        <>
            <li>
                <Link to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to="Portfolio" smooth={true} duration={500}>
                    Portfolio
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to="experience" smooth={true} duration={500}>
                    Experience
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </>
    );

    return (
        <>
            <div className="navbar max-w-7xl mx-auto md:fixed md:z-10 bg-opacity-70 bg-gray-200 border-b-4 font-semibold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-slate-200 text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>


                    <Link to="/" className="btn btn-ghost font-bold italic text-3xl">Julfiker <span className="text-rose-500">Ali</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* Your menu for larger screens */}
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* Download CV button */}
                    <button className="btn btn-ghost hover:text-white outline outline-2 outline-rose-500 text-lg hover:bg-rose-500">Download CV</button>
                </div>
            </div>
            {/* Define your sections with corresponding IDs */}
            <div id="home">
                <Banner></Banner>
            </div>
            <div id="about">
                <About></About>
            </div>
            <div id="Portfolio">
                <Portfolio></Portfolio>
            </div>
            <div id="skills">
                <Skills></Skills>
            </div>
            <div id="experience">
               <Skills></Skills>
            </div>
            <div id="contact">
               <Contact></Contact>
            </div>
        </>
    );

};

export default Home;