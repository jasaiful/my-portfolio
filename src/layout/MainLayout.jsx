import Home from "../pages/Home";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;