import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import discord from '../assets/discord.png';
import twitter from '../assets/twitter.png';
import shark from "../assets/shark.png";
import "../App.css"

function Nav() {
    // State to manage the visibility of the mobile menu
    const [nav, setNav] = useState(false);

    // Handler to toggle the mobile menu
    function navHandler() {
        setNav(!nav);
    }

    return (
        <div className='relative p-5  bg-[#020102] '>
            {/* Top navigation bar */}
            <div className="flex items-center fontbox text-white justify-evenly">
                {/* Logo */}
                <div className="text-3xl w-[100px] md:w-[200px] z-[2]">
                    <img src={shark} alt="Logo" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden fontbox  lg:flex font-bold items-center justify-center gap-5">
                    <Link className='text-[#8749b4]' to="/">home</Link>
                    <Link to="/about">about</Link>
                    <Link to="/roadmap">roadmap</Link>
                    <Link to="/team">team</Link>
                </div>

                {/* Social Media Icons for Desktop */}
                <div className="hidden lg:flex gap-2">
                    <a href="#" className="hidden lg:block">
                        <img src={discord} alt="Discord" className="w-[40px]" />
                    </a>
                    <a href="#" className="hidden lg:block">
                        <img src={twitter} alt="Twitter" className="w-[40px]" />
                    </a>
                </div>

                {/* Mobile Menu Toggle Icon */}
                <div className="block text-white lg:hidden">
                    {nav ? <RxCross1 onClick={navHandler} size={20} /> : <FaBars onClick={navHandler} size={20} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={nav ? "text-white transition-all ease-in duration-500 lg:hidden rounded-lg absolute pt-20 z-20 top-0 left-0 w-[60vw] h-screen bg-[#020102] border border-white" : "fixed left-[-200px]"}>
                {/* Mobile Menu Links */}
                <div className="lg:hidden flex fontbox flex-col p-5 font-bold items-center justify-center gap-5">
                    <Link onClick={navHandler} to="/">home</Link>
                    <Link onClick={navHandler} to="/about">about</Link>
                    <Link onClick={navHandler} to="/roadmap">roadmap</Link>
                    <Link onClick={navHandler} to="/team">team</Link>
                </div>

                {/* Social Media Icons for Mobile */}
                <div className="lg:hidden   flex gap-2 justify-center">
                    <a href="#" className="w-[40px]">
                        <img src={discord} alt="Discord" />
                    </a>
                    <a href="#" className="w-[40px]">
                        <img src={twitter} alt="Twitter" />
                    </a>
                </div>
            </div>

            {/* Decorative Blurred Circles */}
            <div className="absolute hidden lg:block top-0 left-0 w-[300px] rounded-full h-[400px] bg-[#8749b4] blur-[150px]"></div>
            <div className="absolute hidden lg:block top-[-5] right-20 w-[500px] rounded-full h-[500px] bg-[#8749b4] blur-[200px]"></div>
        </div>
    );

    
}

export default Nav;
