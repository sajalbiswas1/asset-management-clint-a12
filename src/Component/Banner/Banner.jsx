// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='lg:w-10/12 md:w-10/12 m-auto'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <div className=''>
                <SwiperSlide key={23}>
                    <img className='w-full h-[600px]' src="https://i.ibb.co/s9MknJP/Untitled-design-39.png" alt="" />
                    <p className='bg-zinc-950 z-10 absolute top-0 bg-opacity-70 h-full w-full'></p>
                    <div className='absolute bottom-6 mb-20 left-[40%] z-20'>
                        <p className='text-4xl mb-7 font-bold text-white'>Join as Employee</p>
                    <Link className='text-xl font-medium ml-24 mb-14 bg-rose-500 px-7 py-1 rounded-md text-white' to={'/signUp'}>Join</Link>
                    </div>
                    </SwiperSlide>
                </div>
                <div className=''>
                <SwiperSlide>
                    <img className='w-full h-[600px]' src="https://i.ibb.co/jvzZrvc/Untitled-design-40.png" alt="" />
                    <p className='bg-zinc-950 z-10 absolute top-0 bg-opacity-70 h-full w-full'></p>
                    <div className='absolute bottom-6 mb-20 left-[40%] z-20'>
                        <p className='text-4xl mb-7 font-bold text-white'>Join as Admin</p>
                    <Link className='text-xl font-medium ml-24 mb-14 bg-rose-500 px-7 py-1 rounded-md text-white' to={'/signUp'}>Join</Link>
                    </div>
                    </SwiperSlide>
                </div>
               {/* <div>
               <SwiperSlide><img className='w-full h-[600px]' src="https://i.ibb.co/jvzZrvc/Untitled-design-40.png" alt="" /></SwiperSlide>
               </div> */}
            </Swiper>
        </div>
    );
};

export default Banner;