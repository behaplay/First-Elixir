import React from 'react'

const Platform = ({ svg, name, info }) => {
    return (
        <div className="w-[285px] h-[240px] flex flex-col items-center text-center gap-4 mb-3">
            <div className="flex w-[100px] h-[100px] bg-gray-100 rounded-full justify-center items-center border-2 border-gray-200">
                {svg}
            </div>
            <div className="flex flex-col gap-3">
                <h5 className="text-[21px] font-bold font-moon text-center">{name}</h5>
                <p className="text-[16px] text-gray-600 font-opens w-[220px] text-center">{info}</p>
            </div>
        </div>
    )
}

export default Platform