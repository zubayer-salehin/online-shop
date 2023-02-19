import React from 'react';
import { CgSearchLoading } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import email from "../../assets/headerIcon/Frame 19.png"
import notification from "../../assets/headerIcon/Frame 20.png"
import userBackground from "../../assets/headerIcon/Frame 21.png"
import user from "../../assets/headerIcon/icons8-customer-100 1.png"

const TopBar = () => {
    return (
        <div className='flex justify-between mb-6'>
            <div>
                <h3 className='text-2xl font-semibold'>Headphone</h3>
                <p className='ml-4 text-sm'>For the top band</p>
            </div>
            <div className='flex gap-4'>
                <div className='relative inline-block mr-2'>
                    <CgSearchLoading className='absolute top-4 left-4' />
                    <input className='w-72 border-2 outline-none pl-10 pr-4 py-3 text-sm rounded-lg' type="text" placeholder='Search Products' />
                    <TfiMenuAlt className='absolute top-4 right-4' />
                </div>
                <img className='h-[47px]' src={email} alt="" />
                <img className='h-[47px]' src={notification} alt="" />
                <div className='relative'>
                    <img className='h-[47px]' src={userBackground} alt="" />
                    <img className='h-[34px] absolute top-1.5 left-1.5' src={user} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;