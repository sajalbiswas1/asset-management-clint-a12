import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import About from "./About";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Asset | Home</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;