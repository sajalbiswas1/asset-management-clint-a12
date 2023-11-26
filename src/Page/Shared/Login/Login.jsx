import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../../Provider/AuthProvider";


const Login = () => {

    const { userLogin, changePassword, googleLogin } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [errorLogin, setErrorLogin] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);
    const navigate = useNavigate()
    const location = useLocation();


    const handleForget = () => {
        setErrorLogin('')
        const emailRf = emailRef.current.value
        if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emailRf)) {
            setErrorLogin('Invalid Email')
            return;
        }
        changePassword(emailRf)
            .then(result => {
                setSuccess('SuccesFully Sent email, check email')
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    //login with google
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                notify()
                console.log(result)
                //go to home
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                //set error
                notify2()
                setErrorLogin(error.message)
                console.log(error)
            })
    }


    //toast
    const notify = () => toast.success("LogIn Successfully!", {
        position: toast.POSITION.TOP_CENTER
    });
    const notify2 = () => toast.error("email or password wrong", {
        position: toast.POSITION.TOP_CENTER
    });



    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        //clear errorLogin
        setErrorLogin('')

        userLogin(email, password)
            .then(result => {
                result
                notify()
                //go to home
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                //set error
                setErrorLogin('email or password do not match')
                notify2()
                console.log(error)
            })

        e.target.reset()
    }


    return (
        <div>
        <div className="h-20 bg-slate-500">
            {/* navbar bg */}
        </div>
        <div data-aos="fade-up" className="lg:w-2/5 md:w-3/5 sm:w-4/5 my-5  m-auto border rounded-xl md:p-16 p-5 bg-gradient-to-r from-[#ffe5e5]  to-[#fdfdde]">
            <h3 className="md:text-4xl text-2xl font-semibold text-center mb-4">SignIn</h3>
            <p className="w-6 m-auto rounded-full flex justify-center mb-3 text-3xl  "><RiContactsLine className="w-5"></RiContactsLine></p>
            <hr />
            <form className="px-6 mt-4 mb-2" onSubmit={handleLogin}>
                <p className="text-lg font-medium mb-2">Email address</p>
                <input className="border w-full rounded-3xl text-base font-normal px-5 py-2 bg-[#F3F3F3]" type="email" required ref={emailRef} name="email" placeholder="Enter your email address" id="" /><br />
                <p className="mt-3  text-lg font-medium mb-2">Password</p>
                <div className="relative">
                    {
                        show ? <span onClick={() => setShow(!show)} className="absolute text-xl right-4 bottom-1/3"><BsFillEyeFill></BsFillEyeFill> </span>
                            : <span onClick={() => setShow(!show)} className="absolute text-xl right-4 bottom-1/3"><BsFillEyeSlashFill></BsFillEyeSlashFill> </span>
                    }
                    <input className=" border w-full text-base rounded-3xl font-normal px-5 py-2 bg-[#F3F3F3]" type={show ? 'text' : 'password'} name="password" placeholder="Enter your password" required id="10004" /><br />
                </div>
                <Link><p onClick={handleForget} className="hidden text-sm font-normal text-left mt-2 mb-2">Forgotten password? </p></Link>
                <input className=" text-white mt-5 rounded-3xl text-xl font-semibold px-5 py-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" type="submit" name="submit" value="Login " id="" />
            </form>
            {
                errorLogin && <p className="text-base font-semibold text-center mb-2 text-red-500">{errorLogin}</p>
            }
            {
                success && <p className="text-base font-semibold text-center mb-2 text-green-400">{success}</p>
            }
            <div className="flex items-center justify-center mx-6 mt-4 gap-2 text-lg font-bold"> <hr className="border-black w-1/6" /> <span>Or</span> <hr className="border-black w-1/6" /></div>
            <div className="md:w-8/12 m-auto">
                <div onClick={handleGoogleLogin} className='flex rounded-3xl items-center hover:text-blue-700 mt-5  mx-2 py-2 justify-center gap-3 hover:border-blue-700 border-2 mb-4 border-black'>
                    <AiOutlineGoogle></AiOutlineGoogle>
                    <Link>LogIn with google</Link>
                </div>
                <div className='flex items-center hover:text-blue-700  mx-2 py-2 justify-center gap-3 hover:border-blue-700 rounded-3xl border-2 mb-4 border-black'>
                    <AiOutlineGithub></AiOutlineGithub>
                    <p>LogIn with github</p>
                </div>
            </div>
            <p className="text-base font-semibold text-center">Do not Have An Account? <Link className="text-[#5b66e0]" to={'/signup'}> Register</Link></p>
            <ToastContainer />
        </div>
    </div>
    );
};

export default Login;