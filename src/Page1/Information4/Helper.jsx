import React from 'react'

const Helper = ({ img, name, info }) => {
    return (
        <div className="md:w-[348px] flex flex-col gap-4 items-center mt-16">
            <div>
                <img src={img} className="w-[45px] h-[45px]" alt="" />
            </div>
            <div className="flex flex-col items-center gap-1">
                <h5 className="text-[21px] text-siniy font-bold text-center">{name}</h5>
                <p className="text-[16px] text-gray-600 md:w-[275px] w-[80%] text-center">{info}</p>
            </div>
        </div>
    )
}

export default Helper