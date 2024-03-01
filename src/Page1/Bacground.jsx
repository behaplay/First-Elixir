import React from 'react'

const Bacground = () => {
    return (
        <section className="m-auto bg-cover bg-[url('https://prium.github.io/elixir/v3.0.0/assets/img/background-15.jpg')] w-[100%] h-[1010px] lg:h-[700px] px-[20px] py-[150px] md:p-[150px] flex flex-col gap-20">
            <div className="flex flex-row gap-4">
                <img src="https://prium.github.io/elixir/v3.0.0/assets/img/checkmark.png" className="mt-3 w-[55px] h-[55px]" alt="" />
                <div className="flex flex-col">
                    <h2 className="text-[50px] font-bold text-aran">Take the right step,</h2>
                    <h2 className="text-[50px] font-bold text-gray-400">do the big things.</h2>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-16 sm:gap-24 ml-16 flex-wrap text-siniy">
                <div className="flex flex-row gap-16 sm:gap-20">

                    <div>
                        <h4 className="text-[50px] font-bold">52</h4>
                        <h6 className="font-semibold text-[20px]">Cases Solved</h6>
                    </div>
                    <div>
                        <h4 className="text-[50px] font-bold">164</h4>
                        <h6 className="font-semibold text-[20px]">Trained Experts</h6>
                    </div>
                </div>
                <div className="flex flex-row gap-16 sm:gap-20">

                    <div>
                        <h4 className="text-[50px] font-bold">38</h4>
                        <h6 className="font-semibold text-[20px]">Branches</h6>
                    </div>
                    <div>
                        <h4 className="text-[50px] font-bold">100</h4>
                        <h6 className="font-semibold text-[20px]">Satisfied Clients</h6>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bacground