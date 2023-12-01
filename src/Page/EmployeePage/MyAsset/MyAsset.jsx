import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../Component/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const MyAsset = () => {
    const { user } = useContext(AuthContext);

    const axiosApi = useAxios()
    const { data } = useQuery({
        enabled: !!user?.email,
        queryKey: ['request', user?.email],
        queryFn: async () => {
            const response = await axiosApi.get(`/requests/v4?requesterEmail=${user?.email}`)
            return response.data;
        }
    });
    console.log(data)
    return (
        <div className="lg:w-10/12 md:w-10/12 m-auto mb-20 min-h-screen bg-slate-200">
            <div className="h-20 bg-slate-500">
                {/* navbar bg */}
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th>Serial</th>
                            <th>Asset Name</th>
                            <th>Asset Type</th>
                            <th>Request Date</th>
                            <th>Approval Date</th>
                            <th>Request Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map((list, idx)=> <tr className="text-lg" key={list._id}>
                                
                                    <th>{idx + 1}</th>
                                    <td>{list.productName}</td>
                                    <td>{list.productType}</td>
                                    <td>{new Date(list.postDate).getDate()}/{new Date(list.postDate).getMonth()}/{new Date(list.postDate).getFullYear()}</td>
                                    <td>{list.approvalDate?<span>{new Date(list.approvalDate).getDate()}/{new Date(list.approvalDate).getMonth()}/{new Date(list.approvalDate).getFullYear()}</span> : 'Empty'}</td>
                                    <td>{list?.status}</td>
                                    <td>{list.status === 'Pending'? <button className="btn">Cancel the request</button>:<button className="btn">Print</button>}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAsset;