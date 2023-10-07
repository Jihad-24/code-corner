/* eslint-disable no-unused-vars */
import React from 'react';
import icon from "../assets/react.svg"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <img src={icon} alt="" />
                <p>Code Corner Ltd.<br />Providing reliable learning enviroment</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover hover:text-sky-500">Software Engineering</a>
                <a className="link link-hover hover:text-sky-500">Programming</a>
                <a className="link link-hover hover:text-sky-500">C++ for DSA</a>
                <a className="link link-hover hover:text-sky-500">Problem-Solving Part</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover hover:text-sky-500">About us</a>
                <a className="link link-hover hover:text-sky-500">Contact</a>
                <a className="link link-hover hover:text-sky-500">Jobs</a>
                <a className="link link-hover hover:text-sky-500">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover hover:text-sky-500">Terms of use</a>
                <a className="link link-hover hover:text-sky-500">Privacy policy</a>
                <a className="link link-hover hover:text-sky-500">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;