import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../Component/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const RequestAsset = () => {
    const { user } = useContext(AuthContext);
    const axiosApi = useAxios()
    const date = new Date()
    const { data, refetch } = useQuery({
        enabled: !!user?.email,
        queryKey: ['assets', user?.email],
        queryFn: async () => {
            const response = await axiosApi.get(`/assets?adminEmail=${user?.email}`)
            return response.data;
        }
    });
    const handleRequest = async (id, productQuantity, list) => {
        const updateQuantity = {
            productQuantity
        }
        const { value: text } = await Swal.fire({
            input: "textarea",
            inputLabel: "Message",
            inputPlaceholder: "Type your message here...",
            inputAttributes: {
                "aria-label": "Type your message here"
            },
            showCancelButton: true
        });
        if (text) {
            axiosApi.patch(`/assets/${id}`, updateQuantity)
                .then(res => {
                    if (res.data.modifiedCount) {
                        refetch()
                        const { adminEmail, postDate, productName, productType} = list
                        const requestAsset = { adminEmail: adminEmail, postDate: postDate, productName: productName, productQuantity: productQuantity, productType: productType, requestDate: date, additionalNote: text, status: '', request: 'pending', requesterName: user?.displayName, requesterEmail: user?.email };
                        axiosApi.post('/requests', requestAsset)
                            .then(res => {
                                Swal.fire({
                                    // position: "top-end",
                                    icon: "success",
                                    title: "Request Successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                console.log(res.data)
                            })
                    }
                    console.log(res.data)
                })

        }


    }

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
                            <th>Asset Name</th>
                            <th>Asset Type</th>
                            <th>Availability</th>
                            <th>Request Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map((list, idx) => <tr className="text-lg" key={list._id}>

                                <th>{idx + 1}</th>
                                <td>{list.productName}</td>
                                <td>{list.productType}</td>
                                <td>{list.productQuantity > 0 ? 'Available' : 'Out Of Stock'}</td>
                                <td><button disabled={list.productQuantity < 1} onClick={() => handleRequest(list._id, list.productQuantity - 1, list)} className="btn">Request</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestAsset;