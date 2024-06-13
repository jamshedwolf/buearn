import React from 'react';
import card from "../assets/card.png"; // Importing the card image
import paper from "../assets/paper.png"; // Importing the paper image
import open from "../assets/opensea.png"; // Importing the opensea image
import About from './About'; // Importing the About component
import Roadmap from './Roadmap'; // Importing the Roadmap component
import Team from './Team'; // Importing the Team component
import Footer from './Footer'; // Importing the Footer component
import Faqs from './Faqs'; // Importing the Faqs component
import "../App.css"

function Home() {
    return (
        <div className="flex  flex-col px-10 relative z-[10]  bg-[#020102] ">
            {/* Main container for the Home component */}
            <div className='flex gap-5 mt-[100px]  flex-col max-w-7xl mx-auto lg:flex-row min-h-screen  justify-center items-center'>
                {/* Container for the m content area */}
                <div className="lg:basis-1/2 lg:px-15 basis-1/3 lg:pl-[90px]  order-2 lg:order-1 p-5">
                    {/* Left section with welcome text and buttons */}
                    <div className="text-3xl lg:text-5xl font-bold text-white z-[10]  ">
                        WELCOME TO THE <span className=' text-center fontbox text-[#8749b4]'>buEARN</span>
                    </div>
                    <p className="text-white mt-10 font-ArialMT builder ">
                        {/* Placeholder text */}
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia dolorem quae hic unde autem similique. Odit quae voluptatum nisi iste harum recusandae. Eaque iste tempora a ratione, asperiores perferendis.
                        elit. Et quia, corrupti soluta eius rerum fuga, sint eaque voluptas quod enim tempore numquam maxime quidem voluptatum voluptatem eligendi doloremque unde? Eius consequuntur rem arch.
                    </p>
                    <div className="flex gap-4">
                        {/* Buttons for Opensea and Whitepaper */}
                        <button className='h-[50px] font-ArialMT hover:bg-[#824ab5] hover:border-0  text-[10px] lg:text-[12px] flex gap-3 items-center text-white px-4 border border-white shadow-lg mt-5 rounded-lg'>
                            <img src={open} alt="" /> BUY IT ON OPENSEA
                        </button>
                        <button className='h-[50px] hover:bg-[#824ab5] hover:border-0 text-[10px] lg:text-[12px] flex gap-1 lg:gap-3 items-center text-white px-4 border border-white shadow-lg mt-5 rounded-lg'>
                            <img src={paper} alt="" /> WHITEPAPER
                        </button>
                    </div>
                </div>

                <div className="lg:basis-1/2 basis-1/3 order-1 lg:order-2 text-center  text-white">
                    {/* Right section with card image and minting details */}
                    <div className="w-[300px] font-ArialMT lg:w-[350px]  mx-auto rounded-[15px] z-[40] p-5 h-[500px] lg:h-[550px] bg-[#611d71]">
                        <img src={card} alt="" className="" />
                        <p className=" p-2 fontbox">mint the token now</p>
                        <div className="">
                            {/* Minting information */}
                            <div className="flex builder font-ArialMT items-center mt-4 justify-between">
                                <p>Public</p>
                                <p>price: 0.5 ETH</p>
                            </div>
                            <div className="flex builder font-ArialMT items-center mt-4 justify-between">
                                <p>remaining/Max supply</p>
                                <p>300/400</p>
                            </div>
                            <button className='py-2 px-4 hover:shadow-[#824ab5]  bg-[#824ab5] shadow-lg mt-5 rounded-lg fontbox'>mint now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute hidden z-[-1] lg:block top-0 left-0 w-[300px] rounded-full h-[400px] bg-[#8749b4] blur-[150px]"></div>
                <div className="absolute hidden z-[-1] lg:block top-[-5] right-20 w-[500px] rounded-full h-[500px] bg-[#8749b4] blur-[200px]"></div>
            </div>

            {/* Other sections/components of the home page */}
            <About />
            <Team />
            <Roadmap />
            <Faqs />
            <Footer />
        </div>
    );
}

export default Home;
