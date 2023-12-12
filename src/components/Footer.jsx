import { Link } from 'react-scroll';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/2logo.png'

const Footer = () => {
    return (
        <div className='bg-gray-200'>
            <footer className="footer max-w-6xl mx-auto rounded-t-lg items-center p-4">
                <aside className="items-center grid-flow-col">
                    <Link to="home" smooth={true} duration={500}><img src={logo} alt="" /></Link>
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col text-4xl gap-4 md:place-self-center md:justify-self-end">
                    <Link to="https://github.com/jasaiful"><FaGithub></FaGithub></Link>
                    <Link to="https://www.linkedin.com/in/julfikerali/"><FaLinkedin className="text-blue-800"></FaLinkedin></Link>
                    <Link to="https://www.facebook.com/julfikarsaiful/"><FaFacebook className="text-blue-900"></FaFacebook></Link>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;