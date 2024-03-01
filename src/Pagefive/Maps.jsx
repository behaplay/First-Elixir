import { Button } from '@material-tailwind/react'
import React from 'react'

const Maps = () => {
    // Iframe не работал иза этого карту проспустил
  return (
    <section className='container mt-40'>
     <h4 className='text-[20px] font-bold text-siniy mb-4'>Write to us</h4>
    <input type="text" placeholder='Your Name' className='w-[100%] mb-10 p-3 border-2 border-gray-400 rounded-sm' />
    <input type="email" placeholder='Email' className='w-[100%] mb-10 p-3 border-2 border-gray-400 rounded-sm' />
    <input type="text" placeholder='Enter Your descriptions here...' className='w-[100%] mb-10 p-3 border-2 rounded-sm border-gray-400'/>
    <Button variant='gradient'>Send Now</Button>
    </section>
  )
}

export default Maps