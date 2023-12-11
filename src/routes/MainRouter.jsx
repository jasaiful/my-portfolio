import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
               path: "/",
               element: <Home></Home>
            },
            {
               path: "/about",
               element: <About></About>
            },
        ]
    }
])

export default MainRouter;