/* eslint-disable no-unused-vars */
import { AuthContext } from "../../providers/AuthProvider";
import NavBar from "../Shared/NavBar/NavBar";
import userDefaultPic from '../../assets/user.png'
import React, { useContext } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Profile = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    return (
        <div>
            <NavBar></NavBar>
            <div className="">
                <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto">
                    <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                        {
                            !user ? <img className=" w-full" src={userDefaultPic} alt="" />
                                :
                                <img className=" w-full" src={user?.photoURL} alt="" />
                        }
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {user && user?.displayName}
                        </h4>
                        <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                            {user && user?.email}
                        </p>
                    </div>
                    <div className="flex justify-center gap-7 p-6 pt-2">
                        <a
                            href="#facebook"
                            className="block text-xl text-[#3B599C]"
                        >
                            <FaFacebook></FaFacebook>
                        </a>
                        <a
                            href="#twitter"
                            className="block text-xl text-[#58A7DE]"
                        >
                            <FaTwitter></FaTwitter>
                        </a>
                        <a
                            href="#instagram"
                            className="block text-xl text-[#D82D7E]"
                        >
                            <FaInstagram></FaInstagram>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;