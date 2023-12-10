import { Link } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <li> <Link to="/"> Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        <li> <Link to="/Portfolio">Portfolio</Link> </li>
        <li> <Link to="/skills"> Skills</Link> </li>
        <li> <Link to="/experience">Experience</Link> </li>
        <li> <Link to="/contact">Contact</Link> </li>
    </>

    return (
        <>
            <div className="navbar max-w-7xl mx-auto md:fixed md:z-10 bg-opacity-0 bg-black font-semibold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-slate-200 text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    {/* <img src="https://i.ibb.co/4Pmqj0V/2logo.png" alt="logo" /> */}
                    <Link to="/" className="btn btn-ghost font-bold italic text-3xl">Julfiker <span className="text-rose-500">Ali</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="btn btn-ghost hover:text-white outline outline-2 outline-rose-500 text-lg hover:bg-rose-500">Download CV</button>
                
                </div>
            </div>
        </>
    );
};

export default Navbar;