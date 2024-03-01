import { Button } from '@material-tailwind/react'
import React from 'react'
import Random from './Random'

const Footer = () => {
  return (
    <footer className='bg-aqua mt-28 flex flex-col'>
      <div className='flex flex-col lg:flex-row gap-10 lg:gap-24 justify-center items-center py-20 lg:py-40'>

        <div className='text-white bg-siniy flex flex-col p-6 md:p-16 w-[90%] md:w-[538px] rounded-xl'>
          <h4 className='font-bold text-[28px] text-center md:text-start'>Sign up for email alerts</h4>
          <p className='font-normal text-[16px] mb-8 text-center md:text-start'>Stay current with our latest insights</p>
          <div className='flex flex-col md:flex-row gap-1 items-center'>
            <input type="email" placeholder='Enter Email Here' className='text-gray-600 p-[12.800px] w-full md:w-[214px] text-[14px] font-normal h-[42px] rounded-md' />
            <Button className="text-black rounded w-full md:w-[152px] h-[42px]" color="yellow">Submit</Button>
          </div>
        </div>
        <div className='flex flex-row items-center gap-16 sm:gap-24'>
          <ul className='flex flex-col gap-3 text-white font-semibold text-[16px]'>
            <li className='hover:underline'>Contact us</li>
            <li className='hover:underline'>FAQ</li>
            <li className='hover:underline'>Privacy Policy</li>
            <li className='hover:underline'>Terms of use</li>
            <li className='hover:underline'>Global Office</li>
            <li className='hover:underline'>Local Office</li>
          </ul>
          <div className='flex flex-col gap-4'>
            <Random name={"Linked"} link={<svg className="w-[14px] h-4 text-white svg-inline--fa fa-linkedin-in fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>}/>
            <Random name={"Twitter"} link={<svg className="w-[14px] h-4 text-white svg-inline--fa fa-linkedin-in fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>}/>
            <Random name={"Facebook"} link={<svg className="w-[14px] h-4 text-white svg-inline--fa fa-facebook-f fa-w-10" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>}/>
            <Random  name={"Google+"} link={<svg className="w-[30px] h-4 text-white svg-inline--fa fa-google-plus-g fa-w-20" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-plus-g" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path></svg>}/>
          </div>
        </div>
      </div>
      <hr className='h-[1px]'/> 
      <div className='flex w-full justify-around bg-siniy py-[28.800px] items-center flex-wrap'>
        <img src="https://prium.github.io/elixir/v3.0.0/assets/img/logo-light.png" className='w-[111px] h-8' alt="Elixir" />
        <p className='text-[16px] text-white'>© Copyright 2021 Elixir Inc.</p>
        <span className='text-[16px] text-white'>Designed by Themewagon</span>
      </div>
    </footer>
  )
}

export default Footer