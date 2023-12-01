import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../Component/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const MyTeam = () => {
    const { user } = useContext(AuthContext);
    const axiosApi = useAxios()
    const { data } = useQuery({
        enabled: !!user?.email,
        queryKey: ['assets', user?.email],
        queryFn: async () => {
            const response = await axiosApi.get(`/users/v2?team=${user?.email}`)
            return response.data;
        }
    });
    console.log(data)
    return (
        <div className="lg:w-10/12 md:w-10/12 m-auto mb-20 min-h-screen bg-slate-200">
            <div className="h-20 bg-slate-500">
                {/* navbar bg */}
            </div>
            <h3 className="md:text-4xl text-2xl ml-5 font-bold mb-1 mt-5"><span className="text-pink-500">Team member List</span></h3>
            <hr className=" border border-black mb-3 mt-5 " ></hr>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl text-center">
                            <th>Serial</th>
                            <th>Member Image</th>
                            <th>Member Name</th>
                            <th>Member Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map((list, idx) => <tr className="text-lg text-center" key={list._id}>

                                <th>{idx + 1}</th>
                                <td><img className="h-20 w-20 rounded-lg m-auto" src={list.photoURL} alt="" /></td>
                                <td>{list.displayName}</td>
                                <td>{list.role}</td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTeam;