import React from 'react'

const People = () => {
    return (
        <section className="m-auto mt-16">
            <div className="flex flex-col md:flex-row bg-gray-100 gap-12 h-[100%] md:h-[244px] justify-center">
                <div className="flex flex-row flex-wrap items-center justify-center gap-12">
                    <img src="https://prium.github.io/elixir/v3.0.0/assets/img/partner/logo2.png" className="md:w-[88px] lg:w-[153px]" alt="" />
                    <img src="https://prium.github.io/elixir/v3.0.0/assets/img/partner/logo1.png" className="md:w-[88px] lg:w-[153px]" alt="" />
                    <img src="https://prium.github.io/elixir/v3.0.0/assets/img/partner/logo6.png" className="md:w-[88px] lg:w-[153px]" alt="" />
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center gap-12">
                    <img src="https://prium.github.io/elixir/v3.0.0/assets/img/partner/logo3.png" className="md:w-[88px] lg:w-[153px]" alt="" />
                    <img src="https://prium.github.io/elixir/v3.0.0/assets/img/partner/logo5.png" className="md:w-[88px] lg:w-[153px]" alt="" />
                    <img src="https://prium.github.io/elixir/v3.0.0/assets/img/partner/logo4.png" className="md:w-[88px] lg:w-[153px]" alt="" />
                </div>
            </div>
        </section>
    )
}

export default People