import React from 'react'

const HelperCard = ({imge, name, jobs, info}) => {
    return (
        <div className="flex flex-col text-center w-[90%] sm:w-[250px] md:w-[348px] h-[447px] bg-white hover:shadow-md duration-300">
            <img src={imge} className="w-[100%] rounded-t-xl h-[232px]" alt="" />
            <div className="flex flex-col gap-1 mt-1 p-[28.8px]">
                <h5 className="text-[21px] text-siniy">{name}</h5>
                <h6 className="text-[12px] text-gray-500">{jobs}</h6>
                <p className="text-[16px] text-gray-600 mt-5">{info}</p>
            </div>
        </div>
    )
}

export default HelperCard