import { create } from 'apisauce';

const createServiceApi = () => {
    const api = create({
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        timeout: 10000,
        baseURL: "http://localhost:4000",
    });

    const login = async (payload) => api.post('/login', payload);

    const register = async (payload) => api.post('/register', payload);

    // Lấy danh mục sản phẩm
    const getProducts = (params) => api.get('/products', params);

    // Lấy danh mục sản phẩm
    const getCategories = () => api.get('/categories?_embed=products');

    // Lấy đơn đặt hàng
    const getOrders = (params) => api.get('/orders', params);
    // Xóa đơn đặt hàng
    const deleteOrders = (orderId) => api.delete('/orders/' + orderId);


    // Tạo đơn hàng
    const createOrder = (payload) => api.post('/orders', payload);
    // Tạo chi tiết đơn hàng
    const createOrderDetails = (payload) => api.post('/orderDetails', payload);

    // Hàm update user
    const updateUser = async (userId, payload) => api.patch('/users/' + userId, payload);

    return {
        api,
        login,
        register,
        getProducts,
        getCategories,
        createOrder,
        createOrderDetails,
        getOrders,
        deleteOrders,
        updateUser,
    };
};

export const ServiceApi = createServiceApi();