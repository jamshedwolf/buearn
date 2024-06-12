import React from 'react';
import { Link } from 'react-router-dom';
import { PiInstagramLogoThin } from "react-icons/pi";
import { TiSocialFacebook } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import shark from "../assets/shark.png";
import "../App.css"

function Footer() {
    return (

        <div className="relative">
        
        <div className="bg-[#020102] border-t border-t-[#8749b4]">
            {/* Main grid layout for the footer content */}
            <div className='p-10 grid grid-cols-1 gap-5 lg:grid-cols-3 items-center text-white lg:justify-between'>
                
                {/* Section for logo and description */}
                <div className="basis-[30%] p-10">
                    <div>
                        {/* Shark logo image */}
                        <img src={shark} alt="Shark Logo" className="w-60" />
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non quia vel sapiente asperiores dignissimos.
                    </div>
                </div>

                {/* Section for navigation links */}
                <div className="basis-[30%] fontbox flex flex-col">
                    <div className="fontbox p-10 lg:p-0 lg:flex-row flex-col flex font-bold justify-center gap-5">
                        <Link to="/">home</Link>
                        <Link to="/about">about</Link>
                        <Link to="/roadmap">roadmap</Link>
                        <Link to="/team">team</Link>
                    </div>
                </div>

                {/* Section for social media icons */}
                <div className="flex basis-[30%] p-10 lg:p-0 lg:place-content-end items-end gap-2">
                    <a href="https://instagram.com" className="p-2 hover:bg-[white] hover:text-black rounded-full border border-white">
                        <PiInstagramLogoThin />
                    </a>
                    <a href="https://facebook.com" className="p-2 hover:bg-[white] hover:text-black rounded-full border border-white">
                        <TiSocialFacebook />
                    </a>
                    <a href="https://twitter.com" className="p-2  hover:bg-[white] hover:text-black rounded-full border border-white">
                        <CiTwitter />
                    </a>
                </div>
            </div>

            {/* Footer copyright text */}
            <div className="text-[#8749b4] p-3 text-center">
                copyright @ Blast penguins. All rights Reserved
            </div>
        </div>
        <div className="absolute hidden lg:block top-[10px] left-[10px] w-[200px] rounded-full h-[200px] bg-[#8749b4] blur-[140px]"></div>
        </div>
    );
}

export default Footer;
