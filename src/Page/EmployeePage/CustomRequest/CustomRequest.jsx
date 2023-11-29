import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../Component/Hooks/useAxios";
import Swal from "sweetalert2";

const CustomRequest = () => {
    const { user } = useContext(AuthContext)
    const axiosApi = useAxios();
    const date = new Date();
    
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const assetName = form.assetName.value;
        const price = form.price.value;
        const assetType = form.assetType.value;
        const assetImage = form.assetImage.value;
        const whyNeed = form.whyNeed.value;
        const additionalInformation = form.additionalInformation.value;
        const asset = { assetName, price:parseInt(price),assetType, employeeEmail: user.email, requestDate:date,assetImage,whyNeed,additionalInformation,request:'pending',requestType:'custom' }
        console.log(asset)
        axiosApi.post('/custom', asset)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    title: "Successfully added",
                    
                    icon: "success"
                  });
            })
            e.target.reset()

    }
    return (
        <div className="lg:w-10/12 md:w-10/12 m-auto bg-slate-200 pb-40">
        <div className="h-20 bg-slate-500">
            {/* navbar bg */}
        </div>
        <h3 className="md:text-4xl text-2xl text-center font-bold mb-1 mt-5"><span className="text-pink-500">Make a custom Request</span></h3>

        <form onSubmit={handleSubmit} className="card-body ">
            <div className="shadow-current shadow px-2 rounded-md pb-10 pt-4">
                <div className="grid md:grid-cols-3 gap-5 w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Asset Name</span>
                        </label>
                        <input type="text" placeholder="Enter asset name" name="assetName" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Price</span>
                        </label>
                        <input type="text" placeholder="Enter Price" name="price" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Asset Type</span>
                        </label>
                        <input type="text" placeholder="Enter asset type" name="assetType" className="input input-bordered w-full" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Asset Image</span>
                        </label>
                        <input type="text" placeholder="image link" name="assetImage" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Why you need this</span>
                        </label>
                        <input type="text" placeholder="Enter your need" name="whyNeed" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Additional Information</span>
                        </label>
                        <input type="text" placeholder="Additional Information" name="additionalInformation" className="input input-bordered w-full" required />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn text-lg font-medium btn-primary bg-slate-500 text-white">Request</button>
                </div>
            </div>
        </form>
    </div>
    );
};

export default CustomRequest;