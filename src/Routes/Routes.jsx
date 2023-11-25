import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "../ErrorElement/ErrorElement";
import Login from "../Page/Shared/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: "logIn",
            element:<Login></Login>
        }
      ]
    },
  ]);
export default router;