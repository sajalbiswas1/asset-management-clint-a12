// import { useContext, useEffect } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { BsBrightnessHigh } from 'react-icons/bs';
// import { MdDarkMode } from "react-icons/md";

const NavBar = () => {

    const { userSignOut, user } = useContext(AuthContext)
    // const [mode, setMode] = useState("light");



    return (
        <div className="dark:bg-black absolute w-full z-50">
            <div className="navbar text-white bg-zinc-800 bg-opacity-10 lg:w-10/12 md:w-10/12 m-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-black"><NavLink className=" md:text-xl " to={'/'} style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",
                                    backgroundColor: isActive ? 'white' : '',
                                    textDecoration: isActive ? "underline" : '',
                                };
                            }}>Home</NavLink></li>
                            <li className="text-black"><NavLink className="md:text-xl " to={'/SignUp'} style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",
                                    backgroundColor: isActive ? 'white' : '',
                                    textDecoration: isActive ? "underline" : '',
                                };
                            }}>Join as Employee</NavLink></li>
                            <li className="text-black"><NavLink className="md:text-xl " to={'/adminLogIn'} style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",
                                    backgroundColor: isActive ? 'white' : '',
                                    textDecoration: isActive ? "underline" : '',
                                };
                            }}>Join as Admin</NavLink></li>
                            {/* <li className="text-black"><NavLink className="md:text-xl " to={'/featureblog'} style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",
                                    backgroundColor: isActive ? 'white' : '',
                                    textDecoration: isActive ? "underline" : '',
                                };
                            }}>Feature Blog</NavLink></li>
                            <li className="text-black"><NavLink className="md:text-xl " to={'/wishlist'} style={({ isActive }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isActive ? "red" : "",
                                    backgroundColor: isActive ? 'white' : '',
                                    textDecoration: isActive ? "underline" : '',
                                };
                            }}> Wishlist</NavLink></li> */}
                        </ul>
                    </div>
                    <div className="flex items-center">
                    <img className="w-16" src="https://i.ibb.co/PMVBBg0/3587817.png" alt="" />
                        <Link to={'/'}><p className="text-3xl font-bold flex flex-col">Asset</p></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className=""><NavLink className="text-base hover:bg-white  " to={'/'} style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "red" : "",
                                backgroundColor: isActive ? 'white' : '',
                                textDecoration: isActive ? "underline" : '',
                            };
                        }}>Home</NavLink></li>
                        <li><NavLink className="text-base hover:bg-white" to={'/SignUp'} style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "red" : "",
                                backgroundColor: isActive ? 'white' : '',
                                textDecoration: isActive ? "underline" : '',
                            };
                        }}>Join as Employee</NavLink></li>
                        <li><NavLink className="text-base hover:bg-white  " to={'/adminLogIn'} style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "red" : "",
                                backgroundColor: isActive ? 'white' : '',
                                textDecoration: isActive ? "underline" : '',
                            };
                        }}>Join as Admin</NavLink></li>
                        {/* <li><NavLink className="text-base hover:bg-white  " to={'/featureblog'} style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "red" : "",
                                backgroundColor: isActive ? 'white' : '',
                                textDecoration: isActive ? "underline" : '',
                            };
                        }}>Feature Blog</NavLink></li>
                        <li><NavLink className="text-base hover:bg-white " to={'/wishlist'} style={({ isActive }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isActive ? "red" : "",
                                backgroundColor: isActive ? 'white' : '',
                                textDecoration: isActive ? "underline" : '',
                            };
                        }}> Wishlist</NavLink></li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <div onClick={handleToggle} className="text-3xl pr-2 flex">
                    {
                        mode == "light" ? <MdDarkMode></MdDarkMode> : <BsBrightnessHigh className="text-white"></BsBrightnessHigh>
                    }
                </div> */}

                    {
                        user ? <>
                            <div className='flex items-center gap-3 pr-4'>
                                <p className='text-xs'>{user.displayName}</p>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className=""><img className='w-10 h-10 m-auto rounded-full' src={user.photoURL === null ? "https://i.ibb.co/VB17ZCv/user.png" : user?.photoURL} alt="" /></label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a onClick={userSignOut}>Sign Out</a></li>
                                    </ul>
                                </div>

                            </div>
                            <Link ><button onClick={userSignOut} className="text-white bg-stone-700 rounded-lg px-5 md:block hidden py-2 text-lg font-bold">LogOut</button> </Link>
                        </>
                            : <div className="flex md:block">
                                <Link to={'/logIn'} className="text-white bg-stone-700 rounded-lg px-3 hover:text-stone-700 border border-white hover:bg-white  py-1 text-base md:text-lg font-bold">LogIn</Link>
                            </div>
                    }
                </div>
            </div>
        </div>





        // <div className="dark:bg-black absolute w-full overflow-hidden">
        //     <div className="navbar text-white  dark:bg-black lg:w-10/12 md:w-10/12 m-auto ">
        //         <div className="navbar-start">

        //             <div className="dropdown">
        //                 <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                 </label>
        //                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

        //                     <li className="text-black"><NavLink className="md:text-xl " to={'/'} style={({ isActive }) => {
        //                         return {
        //                             fontWeight: isActive ? "bold" : "",
        //                             color: isActive ? "red" : "",
        //                             backgroundColor: isActive ? 'white' : '',
        //                             textDecoration: isActive ? "underline" : '',
        //                         };
        //                     }}>Home</NavLink></li>
        //                     <li className="text-black"><NavLink className="md:text-xl " to={'/addblog'} style={({ isActive }) => {
        //                         return {
        //                             fontWeight: isActive ? "bold" : "",
        //                             color: isActive ? "red" : "",
        //                             backgroundColor: isActive ? 'white' : '',
        //                             textDecoration: isActive ? "underline" : '',
        //                         };
        //                     }}>Add Blog</NavLink></li>
        //                     <li className="text-black"><NavLink className="md:text-xl " to={'/blogsall'} style={({ isActive }) => {
        //                         return {
        //                             fontWeight: isActive ? "bold" : "",
        //                             color: isActive ? "red" : "",
        //                             backgroundColor: isActive ? 'white' : '',
        //                             textDecoration: isActive ? "underline" : '',
        //                         };
        //                     }}>All blog</NavLink></li>
        //                     <li className="text-black"><NavLink className="md:text-xl " to={'/featureblog'} style={({ isActive }) => {
        //                         return {
        //                             fontWeight: isActive ? "bold" : "",
        //                             color: isActive ? "red" : "",
        //                             backgroundColor: isActive ? 'white' : '',
        //                             textDecoration: isActive ? "underline" : '',
        //                         };
        //                     }}>Feature Blog</NavLink></li>
        //                     <li className="text-black"><NavLink className="md:text-xl " to={'/wishlist'} style={({ isActive }) => {
        //                         return {
        //                             fontWeight: isActive ? "bold" : "",
        //                             color: isActive ? "red" : "",
        //                             backgroundColor: isActive ? 'white' : '',
        //                             textDecoration: isActive ? "underline" : '',
        //                         };
        //                     }}> Wishlist</NavLink></li>
        //                 </ul>
        //             </div>
        //             <div className="flex items-center">

        //                 <Link to={'/'}><p className="text-2xl md:text-3xl font-bold flex  flex-col">BloggerEx</p></Link>
        //             </div>
        //         </div>
        //         <div className="navbar-center hidden lg:flex">
        //             <ul className="menu menu-horizontal px-1">
        //                 <li><NavLink className="text-base hover:bg-white" to={'/'} style={({ isActive }) => {
        //                     return {
        //                         fontWeight: isActive ? "bold" : "",
        //                         color: isActive ? "red" : "",
        //                         backgroundColor: isActive ? 'white' : '',
        //                         textDecoration: isActive ? "underline" : '',
        //                     };
        //                 }}>Home</NavLink></li>
        //                 <li><NavLink className="text-base hover:bg-white" to={'/addblog'} style={({ isActive }) => {
        //                     return {
        //                         fontWeight: isActive ? "bold" : "",
        //                         color: isActive ? "red" : "",
        //                         backgroundColor: isActive ? 'white' : '',
        //                         textDecoration: isActive ? "underline" : '',
        //                     };
        //                 }}>Add Blog</NavLink></li>
        //                 <li><NavLink className="text-base hover:bg-white" to={'/blogsall'} style={({ isActive }) => {
        //                     return {
        //                         fontWeight: isActive ? "bold" : "",
        //                         color: isActive ? "red" : "",
        //                         backgroundColor: isActive ? 'white' : '',
        //                         textDecoration: isActive ? "underline" : '',
        //                     };
        //                 }}>All Blog</NavLink></li>
        //                 <li><NavLink className="text-base hover:bg-white" to={'/featureblog'} style={({ isActive }) => {
        //                     return {
        //                         fontWeight: isActive ? "bold" : "",
        //                         color: isActive ? "red" : "",
        //                         backgroundColor: isActive ? 'white' : '',
        //                         textDecoration: isActive ? "underline" : '',
        //                     };
        //                 }}>Feature Blog</NavLink></li>
        //                 <li><NavLink className="text-base hover:bg-white" to={'/wishlist'} style={({ isActive }) => {
        //                     return {
        //                         fontWeight: isActive ? "bold" : "",
        //                         color: isActive ? "red" : "",
        //                         backgroundColor: isActive ? 'white' : '',
        //                         textDecoration: isActive ? "underline" : '',
        //                     };
        //                 }}> Wishlist</NavLink></li>
        //             </ul>
        //         </div>
        //         <div className="navbar-end">
        //             {/* <div onClick={handleToggle} className="text-3xl pr-2 flex">
        //                 {
        //                     mode == "light" ? <MdDarkMode></MdDarkMode> : <BsBrightnessHigh className="text-white"></BsBrightnessHigh>
        //                 }
        //             </div> */}

        //             {
        //                 user ? <>
        //                     <div className='flex items-center gap-3 pr-4'>
        //                         <p className='text-xs'>{user.displayName}</p>
        //                         <div className="dropdown dropdown-end">
        //                             <label tabIndex={0} className=""><img className='w-10 h-10 m-auto rounded-full' src={user.photoURL === null ? "https://i.ibb.co/VB17ZCv/user.png" : user?.photoURL} alt="" /></label>
        //                             <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        //                                 <li><a onClick={userSignOut}>Sign Out</a></li>
        //                             </ul>
        //                         </div>

        //                     </div>
        //                     <Link ><button onClick={userSignOut} className="text-white bg-stone-700 rounded-lg px-5 md:block hidden py-2 text-lg font-bold">LogOut</button> </Link>
        //                 </>
        //                     : <div className="flex md:block">
        //                         <Link to={'/logIn'} className="text-white bg-stone-700 rounded-lg px-3 hover:text-stone-700 border border-white hover:bg-white  py-1 text-base md:text-lg font-bold">LogIn</Link>
        //                         <Link to={'/signup'} className="text-white bg-stone-700 rounded-lg px-3 ml-2 hover:text-stone-700 border border-white hover:bg-white py-1 text-base md:text-lg font-bold">Sign Up</Link>
        //                     </div>
        //             }
        //         </div>
        //     </div>
        // </div >
    );
};

export default NavBar;