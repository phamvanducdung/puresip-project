import React from 'react';
import AuthModal from './Modal/AuthModal';
function Header() {

    return (
        <div className='flex flex-row justify-between items-center p-4 font-normal h-[80px] border-b-2 '>
            <div className='flex flex-row items-center justify-between pl-5'>
                <img className='w-[120px] h-[40px]' src="https://dt-puresip.myshopify.com/cdn/shop/files/PURESIP-Logo-_1.png?v=1689059947&width=120" alt="" />
            </div>
            <AuthModal />
        </div>
    )
}

export default Header;