import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxios from "../../Component/Hooks/useAxios";
const About = () => {
    // const [events, setEvent] = useState([]);
    const axiosApi = useAxios();

    const {data:events} = useQuery({
        queryKey:['about'],
        queryFn : async()=>{
            const response = await axiosApi('/about')
            return response.data
        }
    })
    return (
        <div data-aos="fade-up" data-aos-duration="2000" className="w-10/12 m-auto md:mt-16 mt-4">
            <h3 className="md:text-4xl text-2xl text-left font-bold mb-2"><span className="text-pink-500">Abou</span>t</h3>
            <hr className=" border-t border-black h-1 md:mt-5 text-black md:mb-14 mb-4" />
            <div className="">
                {
                    events?.map(event => <div key={event.idx}>
{/* const { title, image, paragraph, paragraph2,event_on } = event */}
                        <div data-aos={`${event.event_on === 'false' ? "fade-up" : "fade-up"}`} data-aos-duration="2000" className={`${event.event_on === 'false' ? 'lg:flex lg:flex-row-reverse' : 'lg:flex'} gap-14 mb-14`}>
                            <div className='lg:w-1/2'>
                                <img src={event.image} alt="" />
                            </div>
                            <div className='lg:w-1/2 lg:mt-0 mt-4'>
                                <h3 className='md:text-2xl text-xl font-bold text-green-600'>{event.title}</h3><br />
                                <p>{event.paragraph}</p><br />
                                <p>{event.paragraph2}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default About;