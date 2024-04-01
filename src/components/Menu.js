import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProductsRequest } from '../stores/redux/ProductSlice';
import { NavLink } from 'react-router-dom';
import { ROUTERS } from '../constants/Routers';
import React from 'react';
import HeaderCart from './HeaderCart';

function Menu() {

    return (

        <div className="flex flex-row items-center justify-between h-[100px] ml-8 mr-8 text-black">
            <div className="flex flex-row items-center justify-between w-[300px] text-[18px]">
                <NavLink to={ROUTERS.HOME} className={({ isActive }) => `${isActive && 'font-bold'}`}><p className='text-black'>Home</p></NavLink>
                <NavLink to={ROUTERS.PRODUCTS} className={({ isActive }) => `${isActive && 'font-bold'}`}><p className='text-black'>Product</p></NavLink>
                <NavLink to={ROUTERS.BLOG} className={({ isActive }) => `${isActive && 'font-bold'}`}><p className='text-black'>Blog</p></NavLink>
                <NavLink to={ROUTERS.ABOUT} className={({ isActive }) => `${isActive && 'font-bold'}`}><p className='text-black'>About</p></NavLink>
            </div>
            <HeaderCart />
        </div>
    )
}

export default Menu;