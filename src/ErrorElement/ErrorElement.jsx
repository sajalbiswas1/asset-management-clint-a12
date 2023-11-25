import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div className="mt-20">
            <p className="text-center mb-8">This page is Not Found</p>
            <Link className="flex justify-center" to={'/'}><button className="btn btn-primary">Back to Home</button></Link>
        </div>
    );
};

export default ErrorElement;