import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from './CartSlice';
import productReducer from './ProductSlice';
import AuthReducer from './AuthSlice';

export const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    auth: AuthReducer
});