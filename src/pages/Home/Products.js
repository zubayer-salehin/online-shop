import React from 'react';
import useProduct from '../../Hooks/useProduct';
import { AiFillStar } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Products = () => {

    const [products] = useProduct();

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-9 mt-8'>
                <Slider {...settings}>
                    {products?.map(p => <div key={p._id} className="p-2 productBoxShadow mr-5">
                        <img className='h-32 mb-4' src={p.picture} alt="" />
                        <h5>{p.name}</h5>
                        <p>Price : ${p.price}</p>
                        <div>
                            <AiFillStar />
                            <BsPlusLg />
                        </div>
                    </div>)}
                </Slider>
            </div>
            <div className='col-span-3'>
                <div className="flex items-end justify-between">
                    <h2 className='text-lg font-medium'>Daily Deals</h2>
                    <h2 className='font-medium'>View All</h2>
                </div>
                <div className="grid grid-cols-1">
                    {/* {products.map(p => <div>
                        <img className='w-4 h-4 rounded-full mr-3' src={p.picture} alt="" />
                        <p>{p.name} <span >price:{p.price}</span></p>
                    </div>)} */}
                </div>
            </div>
        </div>
    );
};

export default Products;