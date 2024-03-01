import React from 'react'

const Registor = () => {
    return (
        <section className="bg-siniy py-[80px] flex flex-col lg:flex-row justify-center items-center gap-10 mt-32 m-auto">
            <div className=" animate-fade-up duration-300 text-center text-white bg-siniy w-[75%] lg:w-[348px] h-[10%] lg:h-[270px] p-[20px] lg:py-[48px] lg:px-[28.800px] border-[1.600px] border-aran rounded-2xl">
                <h3 className="text-[29px] font-bold">Request a call back</h3>
                <p className="text-[16px] mt-3">Would you like to speak to one of our financial advisers over the phone? Just submit your details and we’ll be in touch shortly. You can also email us if you would prefer.</p>
            </div>
            <div className='px-3'>
                <h5 className="text-[21px] text-white font-bold mb-3">I would like to discuss:</h5>
               <form>
                <div className="W-[100%] md:w-[728px] flex flex-col gap-6">
                    <div className="flex flex-row gap-6">
                        <input type="text" placeholder="Your Name" className="text-[14px] text-siri font-normal w-[100%] md:w-[332px] h-[45.2px] p-[12.8px] border-[1px] border-gray-300 rounded-sm" />
                        <input type="text" placeholder="Subject" className="text-[14px] text-siri font-normal w-[100%] md:w-[332px] h-[45.2px] p-[12.8px] border-[1px] border-gray-300 rounded-sm" />
                    </div>
                    <div className="flex flex-row gap-6">
                        <input type="number" placeholder="Phone Number" className="text-[14px] text-siri font-normal w-[100%] md:w-[332px] h-[45.2px] p-[12.8px] border-[1px] border-gray-300 rounded-sm" />
                        <input type="submit" value='Sabmit' className="wek w-[100%] md:w-[332px] h-[45.2px] font-semibold text-[14px] bg-aran border-[1px] border-aran rounded-sm active:bg-[white] active:text-[black] active:border-[1px] active:border-black" />
                    </div>
                </div>
               </form>
            </div>
        </section>
    )
}

export default Registor