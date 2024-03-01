import React, { useState } from 'react'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import Alort from './Alert';
const Header = () => {
    let [alert, setAlert] = useState(false)
    return (
        <>
            <header className="m-auto max-w-[1540px] w-[100%] block z-40">
                <div className="md:flex hidden flex-row justify-between bg-siniy py-2 px-[50px] lg:px-[150px]">
                    <div className="hidden lg:flex flex-row">
                        <img src="https://cdn-icons-png.flaticon.com/512/7246/7246427.png" width={"25px"} height={"18px"} alt="" />
                        <span className="font-medium text-white text-[14px] hover:underline cursor-pointer">1010 Avenue, New York, NY 10018 US.</span>
                    </div>
                    <div className="flex flex-row">
                        <img src="https://images.rawpixel.com/image_transparent_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTM1LXBob25lLTAzLWEucG5n.png" width={"25px"} height={"18px"} alt="" />
                        <span className="font-medium text-white text-[14px] hover:underline cursor-pointer">212 386 5575, 212 386 5576</span>
                    </div>
                    <div className="flex flex-row">

                        <img src="https://static.vecteezy.com/system/resources/previews/013/468/392/original/clock-time-line-icon-png.png" width={"25px"} height={"18px"} alt="" />
                        <span className="font-medium text-white text-[14px] hover:underline cursor-pointer">Mon-Sat, 8.00-18.00. Sunday CLOSED</span>
                    </div>
                </div>
            </header>
            <div className="flex flex-row justify-between py-2 px-[50px] sm:px-[50px] lg:px-[150px] bg-white opacity-90 sticky z-40 top-0">
                <div className="font-moon flex flex-row items-center gap-3">
                    <img src="https://prium.github.io/elixir/v3.0.0/assets/img/logo-dark.png" alt="" />
                    <div className="lg:flex flex-row items-center gap-2 hidden">
                        <Menu>
                            <MenuHandler className="bg-white text-black shadow-none hover:shadow-none">
                                <Button>Home</Button>
                            </MenuHandler>
                            <MenuList className='flex flex-col gap-3'>
                                <Link to={"/pagetwo"} className='ml-3 hover:text-red-400'>Slider Header</Link>
                                <Link to={"/pagetwo"} className='ml-3 hover:text-red-400'>Slider Classic</Link>
                                <Link to={"/pagetwo"} className='ml-3 hover:text-red-400'>Static Header</Link>
                                <Link to={"/pagetwo"} className='ml-3 hover:text-red-400'>Self-hosted Classic</Link>
                                <Link to={"/pagetwo"} className='ml-3 hover:text-red-400'>YouTube Background</Link>
                                <Link to={"/pagetwo"} className='ml-3 hover:text-red-400'>YouTube Classic</Link>
                                <Link to={"/pagetwo"} className='ml-3 hover:text-red-400'>Self-hosted Video</Link>
                                <MenuItem>Static Classic</MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuHandler className="bg-white text-black shadow-none hover:shadow-none">
                                <Button>Pages</Button>
                            </MenuHandler>
                            <MenuList className='flex flex-col gap-3'>
                                <Link to={"/pagethree"} className='ml-3 hover:text-red-400'>Service</Link>
                                <Link to={"/pagethree"} className='ml-3 hover:text-red-400'>About</Link>
                                <Link to={"/pagethree"} className='ml-3 hover:text-red-400'>Alumni</Link>
                                <Link to={"/pagethree"} className='ml-3 hover:text-red-400'>Blank Page</Link>
                                <Link to={"/pagethree"} className='ml-3 hover:text-red-400'>404 Page</Link>
                                <Link to={"/pagethree"} className='ml-3 hover:text-red-400'>Login</Link>
                                <MenuItem>Registration</MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuHandler className="bg-white text-black shadow-none hover:shadow-none">
                                <Button>News</Button>
                            </MenuHandler>
                            <MenuList className='flex flex-col gap-3'>
                                <Link to={"/pagefor"} className='ml-3 hover:text-red-400'>Newsroom</Link>
                                <MenuItem>Singl News</MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuHandler className="bg-white text-black shadow-none hover:shadow-none">
                                <Button>Elements</Button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem>Buttons</MenuItem>
                                <MenuItem>Colors</MenuItem>
                                <MenuItem>Google map</MenuItem>
                                <MenuItem>Grid</MenuItem>
                                <MenuItem>Icons</MenuItem>
                                <MenuItem>Layout Helpers</MenuItem>
                                <MenuItem>Modal Video</MenuItem>
                                <MenuItem>Swiper</MenuItem>
                                <MenuItem>Typography</MenuItem>
                            </MenuList>
                        </Menu>
                        <Link to={"/pagefive"} className="text-[17px] font-semibold cursor-pointer">Contacts</Link>
                    </div>
                </div>
                <a href='https://themewagon.com/themes/elixir-elegant-html5-bootstrap-template-consultancy-agency-webs' className="lg:flex hidden justify-center items-center py-1 px-4 duration-200 bg-white border-2 border-siniy rounded-[50px] text-siniy hover:bg-siniy hover:text-white">Purchase</a>
                <img onClick={() => setAlert(true)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" className="w-[30px] flex lg:hidden" alt="" />
               {alert && <Alort onClose={() => setAlert(false)}/>}
            </div>
        </>
    )
}

export default Header