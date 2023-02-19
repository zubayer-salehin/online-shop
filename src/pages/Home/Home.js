import React from 'react';
import ProductDetails from './ProductDetails';
import Products from './Products';
import TopBar from './TopBar';

const Home = () => {
    return (
        <div className='pt-3 pl-5 pr-4'>
            <TopBar />
            <ProductDetails />
            <Products />
        </div>
    );
};

export default Home;