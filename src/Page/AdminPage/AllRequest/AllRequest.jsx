// import { useContext } from "react";
// import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../Component/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const AllRequest = () => {
    // const { user } = useContext(AuthContext);

    const axiosApi = useAxios()
    const { data } = useQuery({
        
        queryKey: ['requests', ],
        queryFn: async () => {
            const response = await axiosApi.get(`/requests`)
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
                        <tr className="text-center">
                            <th>Serial</th>
                            <th>Asset Name</th>
                            <th>Asset Type</th>
                            <th>Email of requester</th>
                            <th>Name of requester</th>
                            <th>Request Date</th>
                            <th>Additional note</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       
                        {
                            data?.map((list, idx) => <tr className="text-center" key={list._id}>

                                <th>{idx + 1}</th>
                                <td>{list.productName}</td>
                                <td>{list.productType}</td>
                                <td>{list.requesterEmail}</td>
                                <td>{list.requesterName}</td>
                                <td>{new Date(list.requestDate).getDate()}/{new Date(list.requestDate).getMonth()}/{new Date(list.requestDate).getFullYear()}</td>
                                <td className="w-52">{list.additionalNote}</td>
                                <td >{list.status}</td>
                                <td><button className="btn">Approve</button></td>
                                <td><button className="btn">Rejects</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllRequest;