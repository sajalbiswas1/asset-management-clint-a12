import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "../ErrorElement/ErrorElement";
import Login from "../Page/Shared/Login/Login";
import SignUp from "../Page/Shared/SignUp/SignUp";
import Home from "../Page/Home/Home";
import AdminLogin from "../Page/AdminLogin/AdminLogin";
import MyAsset from "../Page/EmployeePage/MyAsset/MyAsset";
import MyTeam from "../Page/EmployeePage/MyTeam/MyTeam";
import RequestAsset from "../Page/EmployeePage/RequestAsset/RequestAsset";
import CustomRequest from "../Page/EmployeePage/CustomRequest/CustomRequest";
import AssetList from "../Page/AdminPage/AssetList/AssetList";
import AddAsset from "../Page/AdminPage/AddAsset/AddAsset";
import AllRequest from "../Page/AdminPage/AllRequest/AllRequest";
import CustomRequestList from "../Page/AdminPage/CustomRequestList/CustomRequestList";
import MyEmployeeList from "../Page/AdminPage/MyEmployeeList/MyEmployeeList";
import Profile from "../Page/Profile/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "logIn",
            element:<Login></Login>
        },
        {
            path: "adminLogIn",
            element:<AdminLogin></AdminLogin>
        },
        {
            path:"SignUp",
            element: <SignUp></SignUp>
        },

        // this is employee section
        {
            path:"myAsset",
            element: <MyAsset></MyAsset>
        },
        {
            path:"myTeam",
            element: <MyTeam></MyTeam>
        },
        {
            path:"requestAsset",
            element: <RequestAsset></RequestAsset>
        },
        {
            path:"customRequest",
            element: <CustomRequest></CustomRequest>
        },

        // This is Admin section
        {
            path:"assetList",
            element: <AssetList></AssetList>
        },
        {
            path:"addAsset",
            element: <AddAsset></AddAsset>
        },
        {
            path:"allRequest",
            element: <AllRequest></AllRequest>
        },
        {
            path:"customRequestList",
            element: <CustomRequestList></CustomRequestList>
        },
        {
            path:"myEmployeeList",
            element: <MyEmployeeList></MyEmployeeList>
        },

        //Profile
        {
            path:"profile",
            element: <Profile></Profile>
        },
      ]
    },
  ]);
export default router;