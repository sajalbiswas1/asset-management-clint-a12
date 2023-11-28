import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Component/Hooks/useAxios";

const Package = () => {
    const axiosApi = useAxios();
    const { data } = useQuery({
        queryKey: ['package'],
        queryFn: async () => {
            const response = await axiosApi('/packages')
            return response.data
        }
    })
    console.log(data)
    return (

        <div className="lg:w-10/12 md:w-10/12 m-auto mt-10 pt-3 pb-14 bg-slate-50 rounded-md">
            
            <h3 className="md:text-4xl text-2xl text-center font-bold mb-14 mt-5"><span className="text-pink-500">Packag</span>e</h3>
            <div className="grid md:grid-cols-3 gap-6 px-8">
                {
                    data?.map(card => <div key={card._id}>
                        <div>

                            <div className="shadow-black shadow-lg bg-white p-5 text-center hover:shadow-black hover:shadow-xl  text-[#525252]">
                                <p className="text-xl font-bold">Maximum <span className="text-green-500 text-2xl">{card.teamMember}</span>  Employee</p>
                                <p className="text-xl font-bold mt-5">Price: <span className="text-green-500">${card.price}</span></p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Package;