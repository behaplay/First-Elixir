import React from 'react'

const OurSize = () => {
    return (
        <section className="m-auto mt-20 px-5 flex justify-center items-center flex-col bg-gray-100">
            <div className="flex flex-col justify-center items-center py-24">
                <h5 className="text-[38px] font-bold text-siniy">Our Service</h5>
                <hr className="w-[67px] h-[6px] bg-siniy rounded-lg" />
            </div>
            <div className="flex flex-col bg-white rounded-3xl lg:w-[1108px]">

                <div className="flex flex-col lg:flex-row lg:items-center gap-12">
                    <img src="https://prium.github.io/elixir/v3.0.0/assets/img/6.jpg" className="lg:w-[554px] rounded-tl-3xl h-[100%] w-[100%]" alt="" />
                    <div className="animate-fade-up duration-300 flex flex-col text-center sm:text-start items-center sm:items-start mx-10 mb-5 gap-6 lg:w-[380px]">
                        <h5 className="text-[21px] font-bold text-center lg:text-start">Business Consulting</h5>
                        <p className="text-[16px] text-gray-500 font-opens w-[90%] lg:w-[458px]">As one of the world’s largest accountancy networks, elixir helps a diverse range of clients with a diverse range of needs.This is especially true of our Advisory Practice, which provides corporate finance and transaction services, business restructuring.</p>
                        <span className="text-[16px] font-opens text-center lg:text-start font-bold hover:underline text-blue-900">Learn More&#8594;</span>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-12">
                    <img src="https://prium.github.io/elixir/v3.0.0/assets/img/7.jpg" className="lg:w-[554px] h-[100%] w-[100%]" alt="" />
                    <div className="animate-fade-up duration-300 flex flex-col text-center sm:text-start items-center sm:items-start mx-10 mb-5 gap-6 lg:w-[380px]">
                        <h5 className="text-[21px] font-bold text-center lg:text-start">Tax consulting</h5>
                        <p className="text-[16px] text-gray-500 font-opens w-[90%] lg:w-[458px]">Elixir serves clients across the country and around the world as they navigate an increasingly complex tax landscape. Our tax professionals draw on deep experience and industry-specific knowledge to deliver clients the insights and innovation they need.</p>
                        <span className="text-[16px] font-opens text-center lg:text-start font-bold hover:underline text-blue-900">Learn More&#8594;</span>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center gap-12">
                    <img src="https://prium.github.io/elixir/v3.0.0/assets/img/8.jpg" className="lg:w-[554px] rounded-bl-3xl h-[100%] w-[100%]" alt="" />
                    <div className=" animate-fade-up duration-300 flex flex-col text-center sm:text-start items-center sm:items-start mx-10 mb-5 gap-6 lg:w-[380px]">
                        <h5 className="text-[21px] font-bold text-center lg:text-start">Advisory</h5>
                        <p className="text-[16px] text-gray-500 font-opens w-[90%] lg:w-[458px]">To help you understand what this road looks like, we surveyed 1165 digital marketers across Europe and North America to explore current trends and priorities in digital marketing.</p>
                        <span className="text-[16px] font-opens text-center lg:text-start font-bold hover:underline text-blue-900">Learn More&#8594;</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap my-20 gap-14">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-2">
                        <svg className="w-[18px] text-siniy svg-inline--fa fa-credit-card fa-w-18 text-primary fs-0 me-3" aria-hidden="true" focusable="false" data-prefix="far" data-icon="credit-card" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"></path></svg>
                        <h5 className="text-[21px] text-siniy font-bold">Special financing</h5>
                    </div>
                    <p className="text-[16px] text-gray-500 w-[100%] sm:w-[305px]">Apply for special financial support and earn exclusive rewards.</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-2">
                        <svg className="w-[18px] text-siniy svg-inline--fa fa-comment-alt fa-w-16 text-primary fs-0 me-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path></svg>
                        <h5 className="text-[21px] text-siniy font-bold">Chat with team</h5>
                    </div>
                    <p className="text-[16px] text-gray-500 w-[100%] sm:w-[348px]">Have a question? Chat online with an expert. <p className="text-siniy flex flex-row"> Start chatting <svg className="w-[16px] svg-inline--fa fa-external-link-alt fa-w-16 ms-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg></p></p>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-2">
                        <svg className="w-[18px] text-siniy svg-inline--fa fa-phone-alt fa-w-16 text-primary fs-0 me-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                        <h5 className="text-[21px] text-siniy font-bold">Call a specialist</h5>
                    </div>
                    <p className="text-[16px] text-gray-500 w-[100%] sm:w-[290px]">Our 24/7 support team is ready for you at 1-800-MY-Elixir.</p>
                </div>
            </div>
        </section>
    )
}

export default OurSize