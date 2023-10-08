/* eslint-disable no-unused-vars */
import React from 'react';
import icon from "../assets/react.svg"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="">
            <div className="footer p-10 bg-[#252525] text-white text-base-content">
                <aside>
                    <img src={icon} alt="" />
                    <p>Code Corner Ltd.<br />Code Corner is dedicated to constant learning & knowledge <br /> sharing  in Providing reliable learning enviroment.</p>
                </aside>
                <nav>
                    <header className="text-xl text-[#c8c7c7] font-bold">Services</header>
                    <a className="link link-hover hover:text-sky-500">Software Engineering</a>
                    <a className="link link-hover hover:text-sky-500">Programming</a>
                    <a className="link link-hover hover:text-sky-500">C++ for DSA</a>
                    <a className="link link-hover hover:text-sky-500">Problem-Solving Part</a>
                </nav>
                <nav>
                    <header className="text-xl text-[#c8c7c7] font-bold">Company</header>
                    <a className="link link-hover hover:text-sky-500">About us</a>
                    <a className="link link-hover hover:text-sky-500">Contact</a>
                    <a className="link link-hover hover:text-sky-500">Jobs</a>
                    <a className="link link-hover hover:text-sky-500">Press kit</a>
                </nav>
                <nav>
                    <header className="text-xl text-[#c8c7c7] font-bold">Code Corner</header>
                    <img src="https://i.ibb.co/MGY1PC3/footer-map-img.png" alt="" />
                </nav>
            </div>
            <div className="footer items-center p-4 bg-neutral text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <img src={icon} alt="" />
                    <p>Copyright © 2023 -Qode Interactive, All Rights Reserved By Code Corner.
                    </p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a
                        href="#facebook"
                        className="block text-xl"
                    >
                        <FaFacebook></FaFacebook>
                    </a>
                    <a
                        href="#twitter"
                        className="block text-xl"
                    >
                        <FaTwitter></FaTwitter>
                    </a>
                    <a
                        href="#instagram"
                        className="block text-xl"
                    >
                        <FaInstagram></FaInstagram>
                    </a>
                    <a
                        href="#instagram"
                        className="block text-xl"
                    >
                        <FaLinkedin></FaLinkedin>
                    </a>
                </nav>
            </div>
        </footer>

    );
};

export default Footer;