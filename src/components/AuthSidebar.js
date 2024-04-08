import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTERS } from '../constants/Routers';

// Memo giúp tối ưu hiệu suất, tránh việc bị render không cần thiết
export default memo(function AuthSidebar() {
    return (
        <div className="grid col-span-1 p-6 bg-white shadow-md border">
            <div className="flex flex-col justify-between h-full">
                <div className="divide-y divide-[#e9e9e9]">
                    <div className="py-3">
                        <NavLink to={ROUTERS.PROFILE} className={(active) => `${active && 'font-bold'} `}>
                            <p className='text-black font-bold text-[18px]'>Profile</p>
                        </NavLink>
                    </div>
                    <div className="py-3">
                        <NavLink to={ROUTERS.ORDER_HISTORY} className={(active) => `${active && 'font-bold'} `}>
                            <p className='text-black font-bold text-[18px]'>Order History</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
});