import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='bg-[#F3F3F3] p-2 md:p-4 mt-4  md:mt-8 flex  gap-5'>
            <button className='bg-[#D72050] font-medium text-xl leading-8 py-1 md:py-2 px-3 md:px-6 cursor-pointer text-white'>
                Latest
            </button>
            <Marquee
            pauseOnHover={true}
            speed={80}
            className='font-medium md:font-semibold leading-8 text-sm md:text-lg text-[#403F3F]'>
                Match Highlights: Germany vs Spain — as it happened! Germany and Spain delivered a thrilling encounter filled with intensity.
            </Marquee>
        </div>
    );
};

export default LatestNews;