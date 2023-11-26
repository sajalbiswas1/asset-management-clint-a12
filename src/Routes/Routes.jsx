import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "../ErrorElement/ErrorElement";
import Login from "../Page/Shared/Login/Login";
import SignUp from "../Page/Shared/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: "logIn",
            element:<Login></Login>
        },
        {
            path:"SignUp",
            element: <SignUp></SignUp>
        }
      ]
    },
  ]);
export default router;