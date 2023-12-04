import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import About from "./About";
import Package from "./Package";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../Component/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import AdminHome from "../AdminPage/AdminHome/AdminHome";

const Home = () => {
    const { user } = useContext(AuthContext);
    const axiosApi = useAxios();
    const url = `/users/v1?email=${user?.email}`;
    const { data } = useQuery({
        enabled: !!user?.email,
        queryKey: ['currentUser', user?.email],
        queryFn: async () => {
            const response = await axiosApi.get(url)
            return response.data;
        }
    });
    console.log('home page data',data)
    return (
        <div>
            <Helmet>
                <title>Asset | Home</title>
            </Helmet>
            {
                data?.role === 'admin'? <>
                <AdminHome></AdminHome>
                </>
                :
                <><Banner></Banner>
                <Package></Package>
                <About></About>
                </>
            }
            
        </div>
    );
};

export default Home;