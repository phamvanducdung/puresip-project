import React, { memo } from 'react';
import { Button, Modal, Tabs, Dropdown, Space } from 'antd';
import { User } from 'lucide-react';
import Login from './Login';
import Register from './Register';
import { useSelector } from 'react-redux';
import { ChevronDown } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logoutRequest, setShowAuthModal } from '../../stores/redux/AuthSlice';
import { modal } from '../Layout';
import { useNavigate } from 'react-router-dom';
import { ROUTERS } from '../../constants/Routers';

const Auth = () => {
    // useSelector truy xuất các state từ store để sử dụng trong các component
    const { user, isShowAuthModal } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // navigate là thư viện của JS giúp điều hướng dễ dàng hơn.
    const navigate = useNavigate();

    // Show giao diện đăng nhập / đăng ký
    const showModal = () => {
        dispatch(setShowAuthModal(true));
    };

    // Thoát khỏi giao diện 
    const handleCancel = () => {
        dispatch(setShowAuthModal(false));
    };

    // Xử lý chuyển đổi giữa đăng nhập và đăng ký, thoát ra theo key lựa chọn của người dùng
    const onClick = ({ key }) => {
        if (key === '1') {
            navigate(ROUTERS.PROFILE);
        }
        if (key === '2') {
            navigate(ROUTERS.ORDER_HISTORY);
        }
        if (key === '3') {
            modal.confirm({
                title: 'Logging Out',
                content: 'Do you Want to logout?',
                onOk() {
                    dispatch(logoutRequest());
                },
                onCancel() { },
            });
        }
    };

    // Tính năng liên quan đến user sau khi đã đăng nhập
    const items = [
        {
            label: 'Profile',
            key: '1',
        },
        {
            label: 'Order History',
            key: '2',
        },
        {
            label: 'Logout',
            key: '3',
        },
    ];

    return (
        <>
            {user ? (
                <Dropdown menu={{ items, onClick }}>
                    <Space>
                        <p className='font-medium text-[15px]'>
                            {user.firstname} {user.lastname}
                        </p>
                        <ChevronDown size={16} />
                    </Space>
                </Dropdown>
            ) : (
                <Button type="text" onClick={showModal}>
                    <User color="#222222" size={20} />
                </Button>
            )}

            <Modal open={isShowAuthModal} onCancel={handleCancel} footer={[]}>
                <Tabs
                    defaultActiveKey="2"
                    items={[
                        {
                            key: 1,
                            label: `Login`,
                            children: <Login />,
                        },
                        {
                            key: 2,
                            label: `Register`,
                            children: <Register />,
                        },
                    ]}
                />
            </Modal>
        </>
    );
};

export default memo(Auth);