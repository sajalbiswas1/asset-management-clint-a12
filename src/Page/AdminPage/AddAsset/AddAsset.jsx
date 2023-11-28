import { useContext } from "react";
import useAxios from "../../../Component/Hooks/useAxios";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddAsset = () => {
    const { user } = useContext(AuthContext)
    const axiosApi = useAxios();
    const date = new Date();
    
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productType = form.productType.value;
        const productQuantity = form.productQuantity.value;
        const asset = { productName, productType, productQuantity: parseInt(productQuantity), adminEmail: user.email, postDate:date }
        console.log(asset)
        axiosApi.post('/assets', asset)
            .then(res => {
                console.log(res.data)
            })
            

    }
    return (
        <div className="lg:w-10/12 md:w-10/12 m-auto bg-slate-200 pb-40">
            <div className="h-20 bg-slate-500">
                {/* navbar bg */}
            </div>
            <h3 className="md:text-4xl text-2xl text-center font-bold mb-1 mt-5"><span className="text-pink-500">Add a new Asse</span>t</h3>

            <form onSubmit={handleSubmit} className="card-body ">
                <div className="shadow-current shadow px-2 rounded-md pb-10 pt-4">
                    <div className="grid md:grid-cols-3 gap-5 w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Product Name</span>
                            </label>
                            <input type="text" placeholder="Product Name" name="productName" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Product Type</span>
                            </label>
                            <input type="text" placeholder="Product Type" name="productType" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Product Quantity</span>
                            </label>
                            <input type="number" placeholder="Product Quantity" name="productQuantity" className="input input-bordered w-full" required />

                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-lg font-medium btn-primary bg-slate-500 text-white">Add Asset</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddAsset;