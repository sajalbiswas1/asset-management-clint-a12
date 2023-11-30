import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Component/Hooks/useAxios";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const AssetList = () => {
    const { user } = useContext(AuthContext);
    const axiosApi = useAxios()
    const { data } = useQuery({
        enabled: !!user?.email,
        queryKey: ['assets', user?.email],
        queryFn: async () => {
            const response = await axiosApi.get(`/assets?adminEmail=${user?.email}`)
            return response.data;
        }
    });


    
    const [filterData, setFilterData] = useState(data)
    
    console.log(filterData)
    const handleSearch = (e) => {
        const search = e.target.value;
        setFilterData(data?.filter(item => search ? item.productName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) : item))
    }
    //filter section
    const handelFilter = (e) => {
        const filterAsset = e.target.value;
        if (filterAsset === "1") {
            setFilterData(data?.filter(item => filterAsset === "1" ? item.productQuantity < parseInt(filterAsset) : item));
        }
        else if (filterAsset === "0") {
            setFilterData(data?.filter(item => filterAsset === "0" ? item.productQuantity > parseInt(filterAsset) : item));
        }
        else {
            setFilterData(data);
        }
    }
    const handelFilter2 = (e) => {
        const filterAsset = e.target.value;
        if (filterAsset === "Returnable") {
            setFilterData(data?.filter(item => item.productType === filterAsset));
        }
        else if (filterAsset === "Non-returnable") {
            setFilterData(data?.filter(item => item.productType === filterAsset))
        }
        else {
            setFilterData(data)
        }
    }
    const handelShort = (e) => {
        const shortData = e.target.value;
        if (shortData === "largeToSmall") {
            setFilterData(data?.sort((a, b) => b.productQuantity - a.productQuantity))
        }
        else if (shortData === "smallToLarge") {
            setFilterData(data?.sort((a, b) => a.productQuantity - b.productQuantity))
        }
        else {
            setFilterData(data)
        }
    }

    return (
        <div className="lg:w-10/12 md:w-10/12 m-auto mb-20 min-h-screen">
            <div className="h-20 bg-slate-500">
                {/* navbar bg */}
            </div>
            {/* Search Section */}
            <div className="grid grid-cols-3 items-center justify-center mb-5">
                <form onChange={handleSearch}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Search by Item Name</span>
                        </label>
                        <input type="text" placeholder="Search.." className="w-48 p-3 border border-black rounded-lg" required />
                    </div>
                </form>
                {/* Filter Section */}

                <div>
                    <h3 className="label-text text-xl font-semibold">Filter</h3>
                    <div className="flex gap-2">
                        <div>

                            <select onChange={handelFilter} className="p-3 rounded-lg border border-black" name="productType" id="">
                                <option value="">All</option>
                                <option value="0">Available</option>
                                <option value="1">Out Of Stock</option>
                            </select>
                        </div>
                        <div>
                            <select onChange={handelFilter2} className="p-3 rounded-lg border border-black" name="productType" id="">
                                <option value="">All</option>
                                <option value="Returnable">Returnable</option>
                                <option value="Non-returnable">Non-returnable</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div>
                    <h3 className="label-text text-xl font-semibold">Short</h3>
                    <select onChange={handelShort} className="p-3 rounded-lg border border-black" name="productType" id="">
                        <option value="">All</option>
                        <option value="largeToSmall">Large to small</option>
                        <option value="smallToLarge">Small to large</option>
                    </select>
                </div>
            </div>
            <hr />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th>Serial</th>
                            <th>Product Name</th>
                            <th>ProDuct Type</th>
                            <th>Date added</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            filterData?.map((list, idx) => <tr className="text-lg" key={list._id}>

                                <th>{idx + 1}</th>
                                <td>{list.productName}</td>
                                <td>{list.productType}</td>
                                <td>{new Date(list.postDate).getDate()}/{new Date(list.postDate).getMonth()}/{new Date(list.postDate).getFullYear()}</td>
                                <td><button className="btn">Update</button></td>
                                <td><button className="btn">Delete </button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssetList;