import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu'
import { App } from 'antd';

let message;
let notification;
let modal;

export default function Layout() {
    const staticFunction = App.useApp();
    message = staticFunction.message;
    modal = staticFunction.modal;
    notification = staticFunction.notification;
    return (
        <div className="min-h-screen">
            <Header />
            <Menu />
            <Outlet />
            <Footer />
        </div>
    );
}

export { message, modal, notification };