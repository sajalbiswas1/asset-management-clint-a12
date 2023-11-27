import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { RiContactsLine } from "react-icons/ri";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../../Provider/AuthProvider";

//date picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../../../Component/Hooks/useAxios";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const { userSignIn, userProfileUpdate } = useContext(AuthContext);
    const [errorRegister, setErrorRegister] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const axiosApi = useAxios();
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        // const url = e.target.url.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        const obj = { displayName: name, photoURL: '' }
        const user = { displayName: name, photoURL: '', birthday: startDate, email, role: 'employee' }

        console.log(user)
        // user update
        const userUpdate = () => {
            userProfileUpdate(obj)
                .then(result => {
                    console.log(result)
                })
                .catch(error => {
                    console.log(error)
                })
        }


        toast
        const notify = () => toast.success("SignUp Successfully!", {
            position: toast.POSITION.TOP_CENTER
        });
        const notify2 = () => toast.error("Already Use email", {
            position: toast.POSITION.TOP_CENTER
        });



        if (password.length < 6) {
            setErrorRegister('is less than 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorRegister("don't have a capital letter");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setErrorRegister("don't have a small letter");
            return;
        }
        else if (!/\d/.test(password)) {
            setErrorRegister("don't have a Digit");
            return;
        }
        else if (!/[@$!%*?&]/.test(password)) {
            setErrorRegister("don't have a special character");
            return;
        }
        else if (!accepted) {
            setErrorRegister("don't have terms & condition");
            return;
        }

        userSignIn(email, password)
            .then(result => {
                notify()
                userUpdate()
                console.log(result)
                axiosApi.post('/users', user)
                    .then(res => console.log(res.data))
                    .catch(error => console.log(error))
                navigate('/')
            })
            .catch(error => {
                notify2()
                setErrorRegister(error.message)
                console.log(error)
            })

        // clear errorRegister
        e.target.reset()
    }

    return (
        <div>
            <Helmet>
                <title>Asset | Join</title>
            </Helmet>
            <div className="h-20 bg-slate-500">

            </div>
            <div data-aos="fade-up" className="lg:w-2/5 md:w-3/5 sm:w-4/5 w-10/12 m-auto border md:p-16 p-5 my-5 bg-gradient-to-r rounded-xl from-[#ffe5e5]  to-[#fdfdde]">
                <h3 className="md:text-4xl text-2xl font-semibold text-center mb-4">Join as Employee</h3>
                <p className="w-6 m-auto rounded-full flex justify-center mb-2 text-3xl  "><RiContactsLine className="w-5"></RiContactsLine></p>
                <hr />
                <form onSubmit={handleSubmit} className="px-6 mt-4 mb-4">
                    <div className="flex items-center gap-2 justify-center">
                        <div>
                            <p className="text-lg font-medium ">Your name</p>
                            <input className="border w-full  rounded-3xl text-base font-normal px-5 py-2 bg-[#F3F3F3]" type="text" name="name" placeholder="Enter your name" required id="10001" /><br />
                        </div>

                        <div>
                            <p className="text-lg font-medium ">Email address</p>
                            <input className="border w-full  rounded-3xl text-base font-normal px-5 py-2 bg-[#F3F3F3]" type="email" name="email" placeholder="Enter your email address" required id="10003" /><br />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <p className="mt-4 text-lg font-medium mb-2">Password</p>
                            <div className="relative">
                                {
                                    show ? <span onClick={() => setShow(!show)} className="absolute text-xl right-4 bottom-1/3"><BsFillEyeFill></BsFillEyeFill> </span>
                                        : <span onClick={() => setShow(!show)} className="absolute text-xl right-4 bottom-1/3"><BsFillEyeSlashFill></BsFillEyeSlashFill> </span>
                                }
                                <input className=" border w-full rounded-3xl text-base font-normal px-5 py-2 mb-2 bg-[#F3F3F3]" type={show ? 'text' : 'password'} name="password" placeholder="Enter your password" required id="10004" /><br />
                            </div>
                        </div>
                        <div>
                            <p className="text-lg mt-4 font-medium mb-2">Date of barth</p>
                            <DatePicker className="border w-full  rounded-3xl text-base font-normal px-5 py-2 bg-[#F3F3F3]" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                    </div>


                    <div className="gap-2 flex mb-3">
                        <input type="checkbox" name="terms" />
                        <label className="text-sm font-medium text-center" htmlFor="terms"><a href="#">Terms & condition</a></label>
                    </div>
                    <input className="bg-[#403F3F] text-white rounded-3xl text-xl font-semibold px-5 py-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" type="submit" name="submit" value="Register Employee" id="" />
                </form>
                {
                    errorRegister && <p className="text-base font-semibold text-center mb-7 text-red-500">{errorRegister}</p>
                }
                <div className="flex items-center justify-center mx-6 mt-4 gap-2 text-lg font-bold"> <hr className="border-black w-1/6" /> <span>Or</span> <hr className="border-black w-1/6" /></div>
                <p className="text-base font-semibold text-center">Do not Have An Account? <Link className="text-[#546dd1]" to={'/login'}> Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;