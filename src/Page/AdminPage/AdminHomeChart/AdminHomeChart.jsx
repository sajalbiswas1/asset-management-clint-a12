import { Cell, Pie, PieChart, Tooltip } from "recharts";

import { useContext, useLayoutEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../Component/Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
const AdminHomeChart = () => {
    const {user}= useContext(AuthContext)
    const axiosApi = useAxios()
    const { data:teamLength } = useQuery({
        enabled: !!user?.email,
        queryKey: ['assets', user?.email],
        queryFn: async () => {
            const response = await axiosApi.get(`/users/v2?team=${user?.email}`)
            return response.data;
        }
    });
    const ids = teamLength.length
    const basic = 12 - ids
    let data = [
        { "name": "Total Donation", "value": basic },
        { "name": "Your Donation", "value": ids }
    ];

    // console.log(data)


    const COLORS = ['#FF444A', '#00C49F'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };



    const useWindowSize = () => {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }
            window.addEventListener("resize", updateSize);
            updateSize();
            return () => window.removeEventListener("resize", updateSize);
        }, []);
        return size;
    };

    const [width, height] = useWindowSize();
    console.log(width,height)
    let handelWith = 500;
    if (width < 768) {
        handelWith = 300;
    }
    return (
        <div className="flex justify-center w-10/12 m-auto mb-10">

            <div>

                <PieChart className="md:text-3xl text-xl font-bold m-0 p-0" height={handelWith} width={handelWith}> <Tooltip/>
                    <Pie data={data} dataKey={"value"} nameKey={'name'} cx={"50%"} cy={"50%"} fill="#8884d8" label={renderCustomizedLabel} labelLine={false}>{data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                       
                    </Pie>
                </PieChart>


                <div className="flex gap-5 justify-center">
                    <p className="font-normal md:text-lg text-xs flex items-center md:gap-5 gap-2">Your Donation <span><hr className="bg-[#00C49F] h-3 lg:w-24 md:w-24 w-8 rounded-sm" /></span></p>
                    <p className="font-normal md:text-lg text-xs flex items-center md:gap-5 gap-2">Total Donation <span><hr className="bg-[#FF444A] h-3 lg:w-24 md:w-24 w-8 rounded-sm" /></span></p>
                </div>
            </div>


        </div>
    );
};

export default AdminHomeChart;