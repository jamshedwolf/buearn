import React from 'react';

function PhaseCard() {
    return (
        <div className="flex flex-col    m-10 lg:m-0 justify-center relative">
            {/* Main container for each phase card */}
            <div className="w-[300px] h-[200px] lg:w-[500px] flex lg:h-[300px]">
                {/* Container for the card structure */}
                <div className="w-[100px] h-[200px] lg:w-[200px] lg:h-[300px] border-[5px] border-r-[0px] rounded-l-[20px] border-[#8749b4]"></div>
                <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border opacity-0"></div>
                <div className="absolute left-[10px] lg:left-[20px] w-[250px] h-[180px] top-[10px] p-5 lg:w-[460px] lg:top-[20px] lg:p-10 rounded-[10px] lg:rounded-[20px] text-white pt-0 border-[#8749b4] lg:h-[260px] border">
                    {/* Content of the card */}
                    <div className="font-bold text-center lg:text-2xl p-2">Phase 2</div>
                    <div className="flex flex-col gap-2">
                        <p className='lg:text-3xl  fontbox'>testnet</p>
                        <p className='text-[12px] lg:text-[18px]'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate nostrum veritatis amet dolores, inventore at sit est. Nobis, magnam vitae!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Roadmap() {
    return (
        <div className="relative h-auto lg:h-[170vh] p-10 bg-[#020102]">
            {/* Main container for the roadmap section */}
            <div className="flex flex-col items-center justify-center lg:p-5">
                {/* Header section for the roadmap */}
                <div className="text-center text-3xl md:text-4xl lg:text-5xl text-white fontbox p-5">road<span className="text-[#9f28ff]">map </span>  </div>
                <div className="text-center text-[12px] lg:text-[18px] lg:p-5 text-white font-semibold">
                    The largest and Unique super rare NFT Marketplace <br />For Crypto collections
                </div>
            </div>

            {/* Grid layout for the phase cards */}
            <div className="h-auto grid grid-cols-1 lg:grid-cols-3   lg:gap-12 max-w-[1200px] mx-auto items-center justify-center bg-[#020102]">
                <div className="flex flex-col gap-8 lg:gap-[150px] place-self-center">
                    <PhaseCard />
                    <PhaseCard />
                </div>

                <div className=" place-self-center hidden lg:block lg:left-[610px] top-[350px]">
                    <div className="relative h-[500px] w-[200px] bg-green">
                        <div className="h-[450px] border-4 border-dotted absolute left-[50%] top-[25px] border-l-[0px] border-[#8749b4]"></div>
                        <div className="h-[1px] w-[70px] border-4 border-dotted absolute left-[65px] top-[55px] border-b-[0px] border-[#8749b4]"></div>
                        <div className="h-[1px] w-[70px] border-4 border-dotted absolute left-[65px] bottom-[55px] border-b-[0px] border-[#8749b4]"></div>
                        <div className="w-[30px] h-[30px] rounded-full absolute bg-[#8749b4] top-[43px] left-[50px]"></div>
                        <div className="w-[30px] h-[30px] rounded-full absolute bg-[#8749b4] top-[43px] right-[50px]"></div>
                        <div className="w-[30px] h-[30px] rounded-full absolute bg-[#8749b4] top-[20px] right-[83px]"></div>
                        <div className="w-[30px] h-[30px] rounded-full absolute bg-[#8749b4] bottom-[43px] left-[50px]"></div>
                        <div className="w-[30px] h-[30px] rounded-full absolute bg-[#8749b4] bottom-[43px] right-[50px]"></div>
                        <div className="w-[30px] h-[30px] rounded-full absolute bg-[#8749b4] bottom-[20px] right-[83px]"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 lg:gap-[150px] place-self-center">
                    <PhaseCard />
                    <PhaseCard />
                </div>
            </div>

            {/* Decorative dotted line with circles */}
            <div className="absolute hidden lg:block top-[700px] right-[-20] w-[200px] rounded-full h-[500px] bg-[#8749b4] blur-[200px]"></div>
            <div className="absolute hidden lg:block top-[100px] right-20 w-[200px] rounded-full h-[500px] bg-[#8749b4] blur-[200px]"></div>

        </div>
    );
}

export default Roadmap;
