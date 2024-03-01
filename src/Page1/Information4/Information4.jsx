import React from 'react'
import Helper from './Helper'

const Information4 = () => {
    return (
        <section className="m-auto">
            <div className="flex justify-center flex-col gap-2 items-center my-20">
                <h3 className="text-[38px] text-siniy font-bold">Things You Get</h3>
                <hr className="w-[67px] h-[5px] bg-siniy rounded-lg" />
            </div>
            <div className="flex flex-row items-center flex-wrap justify-center gap-5 px-10">
                <Helper img={"https://prium.github.io/elixir/v3.0.0/assets/img/icons/sharing.png"} name={"Creative Support"} info={"We transform brands, grow businesses, and tell brand and product stories in a most creative way."} />
                <Helper img={"https://prium.github.io/elixir/v3.0.0/assets/img/icons/mail.png"} name={"Creating Experiences"} info={"We cover a large range of creative platforms and digital projects with one purpose: to create experiences."} />
                <Helper img={"https://prium.github.io/elixir/v3.0.0/assets/img/icons/target.png"} name={"Product Consulting"} info={"We guide you through the pipelines that generate new products with higher potential and lower risk."} />
                <Helper img={"https://prium.github.io/elixir/v3.0.0/assets/img/icons/world-globe.png"} name={"Business Boosting"} info={"We provide energy-efficient and environmentally conservative solutions to our clients to boost their business."} />
                <Helper img={"https://prium.github.io/elixir/v3.0.0/assets/img/icons/money.png"} name={"Strategic Approach"} info={"Based on solid strategic framework and real, relevant research, we create prototypes, not presentations."} />
                <Helper img={"https://prium.github.io/elixir/v3.0.0/assets/img/icons/data-analytics.png"} name={"Logistic Consulting"} info={"We work buy side and sell side to give our clienrts hard hitting answers and focus hard on best opportunities."} />
            </div>
        </section>
    )
}

export default Information4 