import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import useAxios from '../../../Component/Hooks/useAxios';

const MyTeamLength = () => {
    const {user}= useContext(AuthContext)
    const axiosApi = useAxios()
    const { data } = useQuery({
        enabled: !!user?.email,
        queryKey: ['assets', user?.email],
        queryFn: async () => {
            const response = await axiosApi.get(`/users/v2?team=${user?.email}`)
            return response.data;
        }
    });
    return (
        <div>
            {
                data.MyTeamLength - 1
            }
        </div>
    );
};

export default MyTeamLength;