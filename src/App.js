import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home'
import Product from './pages/Products'
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import { persistor, store } from './stores';
import { PersistGate } from 'redux-persist/integration/react';
import About from './pages/About';
import Profile from './pages/Profile';
import OrderHistory from './pages/OrderHistory';
import Checkout from './pages/Checkout';


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="products" element={<Product />} />
			<Route path="blog" element={<Blog />} />
			<Route path="about" element={<About />} />
			<Route path="cart" element={<Cart />} />
			<Route path="profile" element={<Profile />} />
			<Route path="order-history" element={<OrderHistory />} />
			<Route path="checkout" element={<Checkout />} />
		</Route>
	)
);

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	)
}

export default App;
