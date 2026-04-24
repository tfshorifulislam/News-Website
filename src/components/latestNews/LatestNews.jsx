import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='bg-[#F3F3F3] p-4  mt-8 flex gap-5'>
            <button className='bg-[#D72050] font-medium text-xl leading-8 py-2 px-6 cursor-pointer text-white'>
                Latest
            </button>
            <Marquee>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default LatestNews;