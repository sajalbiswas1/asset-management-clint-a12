import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import About from "./About";
import Package from "./Package";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Asset | Home</title>
            </Helmet>
            <Banner></Banner>
            <Package></Package>
            <About></About>
        </div>
    );
};

export default Home;