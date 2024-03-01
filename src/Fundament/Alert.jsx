import React from 'react'
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const Alort = ({ onClose }) => {
    return (
        <div className='absolute z-50 animate-fade-down duration-300 bg-white w-full left-0 pb-4'>
            <div className='flex flex-row justify-between px-8'>
                <img src="https://prium.github.io/elixir/v3.0.0/assets/img/logo-dark.png" alt="" />
                <span onClick={onClose} className='text-[20px] font-thin text-black'>X</span>
            </div>
            <div className="flex flex-col items-center gap-3 px-4">
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
                <Link to={"/pagefive"} className="text-[17px] font-semibold cursor-pointer border-2 w-full rounded-full text-center">Contacts</Link>
            </div>
        </div>
    )
}

export default Alort