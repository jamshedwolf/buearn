import React from 'react';
import img1 from "../assets/1.png"; // Importing team member images
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import earth from "../assets/earth.png"; // Importing decorative images
import coin from "../assets/coin.png";

function Team() {
    return (
        <div className='relative bg-[#020102] py-auto xl:p-20 '>
            {/* Main container for the team section */}
            <div className="text-center text-3xl font-bold p-20 md:text-4xl lg:text-5xl text-white text-center p-5">
                {/* Title for the team section */}
                MEET OUR <span className='text-[#9f28ff]'>TEAM</span>
            </div>
            <div className="md:p-10 p-5 flex  flex-col lg:flex-row justify-center items-center gap-5">
                {/* Container for the team member images */}
                <div className="w-[250px] rounded-lg overflow-hidden  transition-all lg:hover:scale-125 ease-in duration-300 delay-200 h-[350px] border border-[#da15e6]">
                    <img src={img1} alt="" className="h-full w-full" />
                    {/* Team member 1 */}
                </div>
                <div className="w-[250px] rounded-lg overflow-hidden transition-all lg:hover:scale-125 ease-in duration-300 delay-200 h-[350px] border border-[#da15e6]">
                    <img src={img2} alt="" className="h-full w-full" />
                    {/* Team member 2 */}
                </div>
                <div className="w-[250px] rounded-lg overflow-hidden transition-all lg:hover:scale-125 ease-in duration-300 delay-200 h-[350px] border border-[#da15e6]">
                    <img src={img3} alt="" className="h-full w-full" />
                    {/* Team member 3 */}
                </div>
                <div className="w-[248px] rounded-lg overflow-hidden transition-all lg:hover:scale-125 ease-in duration-300 delay-200 h-[350px] border border-[#da15e6]">
                    <img src={img4} alt="" className="h-full w-full" />
                    {/* Team member 4 */}
                </div>
            </div>

            <div className="absolute w-[150px] hidden lg:block bottom-0 left-0">
                {/* Decorative earth image */}
                <img src={earth} alt="" className="w-full h-full" />
            </div>
            <div className="absolute w-[400px] hidden lg:block top-[-300px] right-0">
                {/* Decorative coin image */}
                <img src={coin} alt="" className="w-full h-full" />
            </div>
        </div>
    );
}

export default Team;
