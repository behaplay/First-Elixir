import React from 'react'

const Random = ({ name, link }) => {
    return (
        <div className='flex flex-row items-center cursor-pointer'>
            <span className='w-10 h-10 bg-siniy flex items-center justify-center mr-4 rounded-md'>{link}</span>
            <h5 className='text-white text-[16px] font-semibold'>{name}</h5>
        </div>
    )
}

export default Random