import React from 'react'
import HelperCard from './HelperCard'

const Card = () => {
    return (
        <section className="m-auto bg-gray-50 px-5 pb-24 md:px-10">
            <div className="flex justify-center flex-col gap-2 items-center py-20">
                <h3 className="text-[38px] text-siniy font-bold text-center">Global leadership</h3>
                <hr className="w-[67px] h-[5px] bg-siniy rounded-lg" />
            </div>
            <div className="flex flex-row gap-6 flex-wrap justify-center">
                <HelperCard imge={"https://prium.github.io/elixir/v3.0.0/assets/img/portrait-3.jpg"} name={"Reenal Scott"} jobs={"Advertising Consultant"} info={"Reenal Scott is the Founder and CEO of Elixir, which he started from his dorm room in 2013 with 3 people only."}/>
                <HelperCard imge={"https://prium.github.io/elixir/v3.0.0/assets/img/portrait-4.jpg"} name={"Lily Anderson"} jobs={"Advertising Consultant"} info={"Lily leads Elixir UK and oversees the company’s Customer Operations teams supporting millions ofr users."}/>
                <HelperCard imge={"https://prium.github.io/elixir/v3.0.0/assets/img/portrait-5.jpg"} name={"Thomas Anderson"} jobs={"Thomas Anderson"} info={"As the VP of People, Thomas’s focus lies in the development and optimization of talent retention."}/>
                <HelperCard imge={"https://prium.github.io/elixir/v3.0.0/assets/img/portrait-6.jpg"} name={"Legartha Mantana"} jobs={"Brand Management Consultant"} info={"As General Counsel of Elixir, Tony oversees global legal activities and policies across all aspects."}/>
                <HelperCard imge={"https://prium.github.io/elixir/v3.0.0/assets/img/portrait-7.jpg"} name={"John Snow"} jobs={"Business Analyst"} info={"John has overseen the meteoric growth while protecting scaling its uniquely creative and culture."}/>
                <HelperCard imge={"https://prium.github.io/elixir/v3.0.0/assets/img/portrait-8.jpg"} name={"Ragner Lothbrok"} jobs={"Business Consultant"} info={"Ragner, SVP of Engineering, oversees Elixir’s vast engineering organization which drives the core programming."}/>
            </div>
        </section>
    )
}

export default Card