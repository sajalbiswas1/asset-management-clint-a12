import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../Component/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import AdminHomeChart from "../AdminHomeChart/AdminHomeChart";

const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const axiosApi = useAxios();
    const date = new Date();
    const url = `/users/v1?email=${user?.email}`;
    const { data:userData } = useQuery({
        enabled: !!user?.email,
        queryKey: ['currentUser', user?.email],
        queryFn: async () => {
            const response = await axiosApi.get(url)
            return response.data;
        }
    });
    let dataAdmin = {}
    if (userData) {
        dataAdmin = userData.role
        // console.log(data)
    }
    console.log(dataAdmin)

   



    const { data, refetch } = useQuery({

        queryKey: ['requestsData',],
        queryFn: async () => {
            const response = await axiosApi.get(`/requests/pendingData`)
            return response.data;
        }
    });









    const { data: dataQuantity} = useQuery({
        enabled: !!user?.email,
        queryKey: ['assetsQuantity', user?.email],
        queryFn: async () => {
            const response = await axiosApi.get(`/assets/quantity?adminEmail=${user?.email}`)
            return response.data;
        }
    });
    const handleApprove = (id, requesterEmail) => {
        // setRequesterEmail(requesterEmail)
        //reface co
        // refetchUserData()

        // console.log(userData.data._id)
        const updateData = { status: 'Approved', approvalDate: date }
        //update status approve
        axiosApi.patch(`/requests/${id}`, updateData)
            .then(res => {
                refetch()
               
                // /users/v5?team=admin@gmail.com&email=sajalb1899@gmail
                axiosApi.patch(`/users/v5?team=${user.email}&email=${requesterEmail}`)
                    .then(res => {
                        console.log('user Team', res.data)
                    })
                console.log(res.data)
            })
        console.log(id)
        // setRequesterEmail('')
    }





    return (
        <div className="lg:w-10/12 md:w-10/12 m-auto mb-20 min-h-screen">
            <div className="h-20 bg-slate-500">
                {/* navbar bg */}
            </div>
            <h3 className="md:text-4xl text-2xl  font-bold mb-1 mt-5"><span className="text-pink-500">Pending Request</span></h3>
            <hr className=" border border-black mb-3 mt-5 " ></hr>

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
                                <td>{list.status === "Pending" ? <button onClick={() => handleApprove(list._id, list.requesterEmail)} className="btn">Approve</button> : <button className="btn text-green-500">Approved</button>}</td>
                                <td><button className="btn">Reject</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            <h3 className="md:text-4xl text-2xl  font-bold mb-1 mt-5"><span className="text-pink-500">Limited Stock items</span></h3>
            <hr className=" border border-black mb-3 mt-5 " ></hr>

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
                            dataQuantity?.map((list, idx) => <tr className="text-lg" key={list._id}>

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
            <AdminHomeChart></AdminHomeChart>
        </div>
    );
};

export default AdminHome;