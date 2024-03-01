
export const Video= () => {
    return (
        <div className='container px-4 lg:px-20 mt-24'>
            <div className='flex w-full md:h-full h-[300px] items-center bg-no-repeat bg-cover bg-bg-image justify-center'>
                <div className='bg-blue-gray-200 w-28 h-28 bg-opacity-55 rounded-full flex items-center justify-center my-72'>
                    <div className='bg-white w-24 h-24 flex justify-center items-center rounded-full'>
                        <svg className='w-7 text-[#2A3855]' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}