import React from 'react';
import Button from '../../Shared/Button';
// import { GoDotFill } from "react-icons/go";
import { AiFillCaretRight } from "react-icons/ai";

const HeroSection = () => {
    return (
        <div className='bg-blue-50 pt-32 pb-10 md:pt-36 md:pb-16 h-full  md:h-screen'>
            <div className='max-w-7xl mx-auto px-2 '>

                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='w-full md:w-7/12 flex flex-col gap-8 justify-center items-center md:items-start'>
                        <h2 className='text-4xl text-center md:text-start md:text-6xl font-bold text-[#1B3764]'>Your Books From
                            The Best Writer.</h2>
                        <h2 className='text-xl text-center md:text-start font-semibold text-slate-500'>
                            Reading books is widely regarded as an indispensable aspect of fostering a vibrant and flourishing culture. Books serve as powerful conduits that enable authors to establish profound connections with their readership. They create a unique and immersive experience, providing individuals with an opportunity to explore diverse perspectives, ignite their imagination, and expand their knowledge horizons.
                        </h2>
                        <div>
                            <Button>
                                Order Today
                            </Button>
                        </div>
                        <div className='flex gap-10'>
                            <div>
                                <h2 className='flex'> <span className='text-xl text-[#1E8FFD] mt-2'> <AiFillCaretRight></AiFillCaretRight> </span>  <span className='text-2xl text-slate-700 font-semibold'>Pages:</span> </h2>
                                <h2 className='ml-6'>250 pages</h2>
                            </div>
                            <div>
                                <h2 className='flex'> <span className='text-xl text-[#1E8FFD] mt-2'> <AiFillCaretRight></AiFillCaretRight> </span>  <span className='text-2xl text-slate-700 font-semibold'>Pages:</span> </h2>
                                <h2 className='ml-6'>250 pages</h2>
                            </div>
                            <div>
                                <h2 className='flex'> <span className='text-xl text-[#1E8FFD] mt-2'> <AiFillCaretRight></AiFillCaretRight> </span>  <span className='text-2xl text-slate-700 font-semibold'>Pages:</span> </h2>
                                <h2 className='ml-6'>250 pages</h2>
                            </div>

                            

                            
                        </div>
                    </div>


                    <div className='w-full md:w-5/12'>
                        <img src="/book-cover-the-dark-light.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;