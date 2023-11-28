import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Component/Hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const AssetList = () => {
    const { user } = useContext(AuthContext);

    const axiosApi = useAxios()
    const { data } = useQuery({
        enabled: !!user?.email,
        queryKey: ['asset', user?.email],
        queryFn: async () => {
            const response = await axiosApi.get(`/assets?email${user?.email}`)
            return response.data;
        }
    });
    console.log(data)
    return (
        <div className="lg:w-10/12 md:w-10/12 m-auto mb-20 min-h-screen">
            <div className="h-20 bg-slate-500">
                {/* navbar bg */}
            </div>
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
                            data?.map((list, idx)=> <tr className="text-lg" key={list._id}>
                                
                                    <th>{idx + 1}</th>
                                    <td>{list.productName}</td>
                                    <td>{list.productType}</td>
                                    <td>{list.postDate.slice(0,10)}</td>
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