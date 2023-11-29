import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../Component/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";


const Profile = () => {
  const { user } = useContext(AuthContext);
  const axiosApi = useAxios();
  const url = `/users/v1?email=${user?.email}`;
  const { data } = useQuery({
    enabled: !!user?.email,
    queryKey: ['currentUser', user?.email],
    queryFn: async () => {
      const response = await axiosApi.get(url)
      return response.data;
    }
  });
  return (
    <div className="lg:w-12/12 md:w-10/12 m-auto bg-slate-200">
      <div className="h-20 bg-slate-500">
        {/* navbar bg */}
      </div>
      <h3 className="md:text-4xl text-2xl text-center font-bold mb-8 mt-5 "><span className="text-pink-500">Your Profile</span></h3>
      <div className="min-h-screen">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 shadow shadow-current mx-10 rounded p-5">
          <h4 className="text-xl md:mb-5"><span className="font-semibold">Name:</span> {data?.displayName}</h4>
          <p className="text-xl md:mb-5"><span className="font-semibold">Email:</span> {data?.email}</p>
          <p className="text-xl "><span className="font-semibold">Date Of Birth:</span> {new Date(data?.birthday).getDate()}/{new Date(data?.birthday).getMonth()}/{new Date(data?.birthday).getFullYear()}</p>
          <button className="btn text-xl">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;