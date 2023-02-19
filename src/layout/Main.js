import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';

const Main = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className="col-span-2 sideBarBorder mt-1">
                <SideMenu />
            </div>
            <div className="col-span-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Main;