import React from 'react'
import "../App.css"
function Faqs() {
    return (
        <div className="bg-[#020102]">
            {/* Title */}
            <div className="font-bold text-center text-3xl md:text-4xl lg:text-5xl p-2 text-[#9f28ff]">FAQS</div>

            {/* FAQ Container */}
            <div className='min-h-[60vh] mx-10 lg:w-[50%] lg:mx-auto my-10'>
                {/* FAQ Items */}
                {[...Array(8)].map((_, index) => (
                    <div key={index} className="text-white font-ArialMT builder collapse mt-5 bg-[#020102] collapse-plus border shadow-lg border-2 border-[#152329]">
                     
                     
                        <input className="text-3xl bg-pink-400" size={40} type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title  text-[10px] md:text-2xl font-medium">
                            <span className="text-[10px] font-ArialMT md:text-2xl font-medium md:mx-10 mx-5">{`0${index + 1}`}</span>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className="collapse-content font-ArialMT text-white/80 text-[10px] md:text-xl lg:text-2xl md:ml-10">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ducimus?</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faqs
