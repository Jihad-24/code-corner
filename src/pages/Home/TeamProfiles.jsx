/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const TeamProfiles = ({ profile }) => {

    const { name, occupation, image } = profile;

    return (
        <div>
            <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img src={image} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                    </h4>
                    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        {occupation}
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
    );
};

export default TeamProfiles;