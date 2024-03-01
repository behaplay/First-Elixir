import { Carousel, IconButton } from '@material-tailwind/react'
import React from 'react'

const Carusel = () => {
    return (
        <Carousel
            autoplay="true"
            loop
            className="mx-ayto container mt-20 rounded-xl bg-gray-200 w-[70%]">
            <div className="flex animate-fade-up duration-300 flex-col md:flex-row justify-center items-center gap-10 my-20 px-4">
                <img src="https://prium.github.io/elixir/v3.0.0/assets/img/client3.png" className="w-[193px] h-[193px]" alt="" />
                <div className="md:w-[600px] flex flex-col justify-center">
                    <p className="w-[80%] text-[18px] text-gray-700">As a sales gamification company, we were skeptical to work with a consultant to optimize our sales emails, but Elixir was highly recommended by many other Y-Combinator startups we knew. Elixir helped us run a ~6 week email campaign.</p>
                    <h6 className="text-[16px] font-bold mt-5 text-siniy">David Beckham</h6>
                    <p className="text-[16px] text-gray-600">Chairman, Harmony Corporation</p>
                </div>
            </div>
            <div className="flex animate-fade-up duration-300 flex-col md:flex-row justify-center items-center gap-10 my-20 px-4">
                <img src="	https://prium.github.io/elixir/v3.0.0/assets/img/client1.png" className="w-[193px] h-[193px]" alt="" />
                <div className="md:w-[600px] flex flex-col justify-center">
                    <p className="w-[80%] text-[18px] text-gray-700">Their work on our website and Internet marketing has made a significant different to our business. We’ve seen a 425% increase in quote requests from the website which has been pretty remarkable – but I’d always like to see more!</p>
                    <h6 className="text-[16px] font-bold mt-5 text-siniy">Michael Clarke</h6>
                    <p className="text-[16px] text-gray-600">CEO, A.E.T Institute</p>
                </div>
            </div>
            <div className="flex animate-fade-up duration-300 flex-col md:flex-row justify-center items-center gap-10 my-20 px-4">
                <img src="https://prium.github.io/elixir/v3.0.0/assets/img/client2.png" className="w-[193px] h-[193px]" alt="" />
                <div className="md:w-[600px] flex flex-col justify-center">
                    <p className="w-[80%] text-[18px] text-gray-700">Writing case studies was a daunting task for us. We didn’t know where to begin or what questions to ask, and clients never seemed to follow through when we asked. Elixir team did everything – with almost no time or effort for me!</p>
                    <h6 className="text-[16px] font-bold mt-5 text-siniy">Maria Sharapova</h6>
                    <p className="text-[16px] text-gray-600">Managing Director, Themewagon Inc.</p>
                </div>
            </div>
        </Carousel>
    )
}

export default Carusel