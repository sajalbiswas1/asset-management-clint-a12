import { Outlet } from "react-router-dom";
import NavBar from "../Page/Shared/NavBar/NavBar";
import Footer from "../Page/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Main;