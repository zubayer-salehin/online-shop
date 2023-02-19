import React from 'react';
import { AiFillStar } from "react-icons/ai";
import frame from "../../assets/frame/Frame 22.png"
import { AiFillHeart } from "react-icons/ai";

const ProductDetails = () => {

    return (
        <div className='grid grid-cols-12 gap-8'>
            <div className="col-span-8 productDetailsBoxShadow p-7">
                <div className="grid grid-cols-12">
                    <div className="col-span-5 flex items-center">
                        <img src="https://drive.google.com/uc?export=view&id=1s-uCgFAM0dZCIldCOgb986Uf3ztD7ueV" alt="" />
                    </div>
                    <div className="col-span-7">
                        <h5 className='text-lg font-semibold'>Beats Studio3 Wireless Headphone</h5>
                        <div className="flex items-center gap-3">
                            <div className='flex gap-2 text-orange-500'>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <p className='text-slate-500'>( 200 + reveiws )</p>
                        </div>
                        <p className='text-sm mt-2'>Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs </p>
                        <p className='text-[#07FFD2] text-sm mt-2 font-semibold'>Price $ 450.55</p>
                        <div className='flex mt-3 gap-2.5 mb-8'>
                            colors :
                            <div className="flex items-center gap-2">
                                <span class="inline-block w-5 h-5 bg-primary  rounded-full"></span>
                                <span class="w-5 h-5 bg-[#07FFD2] inline-block rounded-full"></span>
                                <span class="w-5 h-5 bg-blue-600 inline-block rounded-full"></span>
                                <span class="w-5 h-5 bg-purple-600 inline-block rounded-full"></span>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <button className='inline-block px-1.5 py-1 border-2 border-primary rounded-md'><AiFillHeart  className='text-primary text-2xl'/></button>
                            <button className=' font-medium inline-block px-2 py-0.5 border-2 border-primary rounded-md'>Add to cart</button>
                            <button className=' font-medium inline-block px-3 py-0.5 border-2 bg-primary border-primary rounded-md'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-4">
                <img src={frame} alt="" />
            </div>
        </div>
    );
};

export default ProductDetails;