import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../stores/redux/CartSlice';
import { message } from 'antd';
import { useEffect } from 'react';
import { getProductsRequest } from '../stores/redux/ProductSlice';
import ProductLoading from './ProductLoading';
import React from 'react';
import { Button } from 'antd';
import { useSearchParams } from 'react-router-dom';
import ProductHeader from './ProductHeader';

function List() {
    const { fetching, products } = useSelector((state) => state.product);
    const [searchParams, setSearchParams] = useSearchParams();
    const sort = searchParams.get('sort') || '';
    const sorts = sort.split('-');
    const q = searchParams.get("q");
    const categoryId = searchParams.get('categoryId')
    const dispatch = useDispatch();
    function handleFilterProductByCategory(value) {

        // Tìm sản phẩm dựa vào ID
        setSearchParams((prevParams) => {
            if (!value) {
                prevParams.delete('categoryId');
            } else {
                prevParams.set('categoryId', value);
            }
            return prevParams;
        });
    }

    // Thêm sản phẩm vào giỏ hàng
    const onAdd = (newProduct) => {
        dispatch(addProductToCart(newProduct));
        message.success('Thêm sản phẩm thành công');
    };

    // Lấy dữ liệu, tìm kiếm name
    const getProducts = () => {
        dispatch(getProductsRequest({
            ...categoryId ? {
                categoryId
            } : {},
            ...q ? { name_like: q } : {},
            ...sort ? { _sort: sorts[0], _order: sorts[1] } : {},

        }));
    };

    useEffect(() => {
        getProducts();
    }, [categoryId, q, sort]);

    return (
        <div className="container mb-9 mx-auto">

            <div className="card p-4">
                <div className="mb-6 text-center">
                    <h1 className='m-5 mt-0 flex justify-center font-bold text-[40px]'>Juice Collections</h1>
                    <div className='flex flex-row items-center justify-center gap-4 p-2'>
                        <Button className='bg-black h-[40px]' onClick={() => handleFilterProductByCategory("1")}>Cold Pressed</Button>
                        <Button className='bg-black h-[40px]' onClick={() => handleFilterProductByCategory("2")}>Sugar Free</Button>
                        <Button className='bg-black h-[40px]' onClick={() => handleFilterProductByCategory("3")}>Squeezed</Button>
                        <Button className='bg-black h-[40px]' onClick={() => handleFilterProductByCategory("4")}>Enriched</Button>
                        <ProductHeader />
                    </div>
                </div>

                {fetching ? (
                    <ProductLoading />
                ) : (
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-4 mt-8">
                        {products.map((item, index) => (
                            <div className="group" key={index} onClick={() => onAdd(item)}>
                                <div className="relative overflow-hidden ">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full"
                                    />
                                    <img
                                        src={item.imageHover}
                                        alt={item.name}
                                        className="absolute top-0 left-0 z-20 transition-all duration-200 ease-linear opacity-0 group-hover:opacity-100 group-hover:scale-125"
                                    />
                                    <div className="absolute left-0 right-0 z-30 flex items-center justify-center transition-all duration-200 ease-linear delay-150 -bottom-20 group-hover:bottom-10">
                                        <button className="hover:bg-[#DF4141] border py-[10px] px-5 text-sm hover:text-white bg-white transition-all duration-200">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                                <div className="pt-4 text-center">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className='font-bold text-[18px]'>$ {item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default List;