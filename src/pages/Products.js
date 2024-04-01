import React, { useEffect, useState } from 'react';
import { ServiceApi } from '../services/Api';
import ProductLoading from '../components/ProductLoading';
import List from '../components/ListProduct'
import { useSearchParams } from 'react-router-dom';


const Products = () => {


    return (
        <List />
    );
};

export default Products;