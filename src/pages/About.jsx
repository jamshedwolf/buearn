import React from 'react';

import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import capture from "../assets/A.svg";
import heli from "../assets/heli.png";
import "../App.css"

function About() {
  return (
    <div className='bg-[#020102] relative lg:px-[30px] lg:p-20'>
      {/* Main container with padding and minimum height */}
      <div className="min-h-screen mx-auto xl:max-w-[1400px] lg:p-20">
        
        {/* Title Section */}
        <div className="text-center fontbox text-3xl mt-5  p-10 md:text-4xl lg:text-5xl text-white">
          about <span className='text-[#9f28ff]'>us</span>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-center">

          {/* Text Content */}
          <div className="basis-[44%] p-5 lg:p-0">
            <p className="text-3xl text-[#9f28ff]  fontbox md:p-5 pb-0 ">buEARN</p>
            <p className="text-white md:p-5 builder">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia, corrupti soluta eius rerum fuga, sint eaque voluptas quod enim tempore numquam maxime quidem voluptatum voluptatem eligendi doloremque unde? Eius consequuntur rem arch.
            </p>
            <p className="text-white builder md:p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing 
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia dolorem quae hic unde autem similique. Odit quae voluptatum nisi iste harum recusandae. Eaque iste tempora a ratione, asperiores perferendis.
              elit. Et quia, corrupti soluta eius rerum fuga, sint eaque voluptas quod enim tempore numquam maxime quidem voluptatum voluptatem eligendi doloremque unde? Eius consequuntur rem arch.
            </p>
          </div>

          {/* Image Content */}
          <div className="flex items-center justify-center basis-[50%]">
            <img src={capture} alt="" className="rotate-360" />
          </div>

        </div>
      </div>

      {/* Decorative Helicopter Image */}
      <img src={heli} alt="" className="hidden lg:block absolute top-[-150px] left-0" />
    </div>
  );
}

export default About;
