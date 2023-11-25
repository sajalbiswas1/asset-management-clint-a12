import { Outlet } from "react-router-dom";
import NavBar from "../Page/Shared/NavBar/NavBar";

const Main = () => {
    return (
        <div className="bg-slate-600 h-72">
        <NavBar></NavBar>
        <Outlet></Outlet>
        </div>
    );
};

export default Main;