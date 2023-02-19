import React from 'react';
import logo from "../assets/logo/download (8) 1.png"
import frame from "../assets/frame/Frame 2.png"
import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineHistory, AiOutlineContacts, AiOutlineSetting } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { MdOutlineExplore } from "react-icons/md";
import { FaRegHeart, FaSellcast } from "react-icons/fa";
import { FiUser } from "react-icons/fi";


const SideMenu = () => {

    const menus = [
        {
            path: "/",
            name: "Home",
            icon: <AiOutlineHome />
        },
        {
            path: "/",
            name: "Explore",
            icon: <MdOutlineExplore />
        },
        {
            path: "/",
            name: "Saved",
            icon: <FaRegHeart />
        },
        {
            path: "/",
            name: "Cart",
            icon: <AiOutlineShoppingCart />
        },
        {
            path: "/",
            name: "Selling",
            icon: <FaSellcast />
        },
        {
            path: "/",
            name: "Profile",
            icon: <FiUser />
        },
        {
            path: "/",
            name: "History",
            icon: <AiOutlineHistory />
        },
        {
            path: "/",
            name: "Contact us",
            icon: <AiOutlineContacts />
        },
        {
            path: "/",
            name: "Setting",
            icon: <AiOutlineSetting />
        },
    ]

    return (
        <div>
            <div className="flex items-end mt-5 ml-5 mb-12">
                <img className='w-7 h-7' src={logo} alt="" />
                <h3 className='ml-4 text-lg text-secondary'>MK Sounds</h3>
            </div>
            <ul className='ml-7 text-secondary'>
                {menus.map(menu => <li key={Math.random()*100} className='flex gap-6 items-center mb-6'>
                    <div className='text-lg'>
                        {menu.icon}
                    </div>
                    <Link to={menu.path}>{menu.name}</Link>
                </li>)}
            </ul>
            <div className='pt-5 ml-2.5 mr-1.5 mb-5'>
                <img src={frame} alt="" />
            </div>
        </div>
    );
};

export default SideMenu;