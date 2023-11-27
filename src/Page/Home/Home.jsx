import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Asset | Home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;