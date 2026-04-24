import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";
const Header = () => {
    return (
        <div>
            <div className='flex text-center justify-center mt-5 md:mt-10'>
                <div className='space-y-2'>
                    <Image src={logo} alt='logo' width={300} height={200} />
                    <p className='text-[#706F6F] text-sm md:text-lg  md:leading-8'>
                        Journalism Without Fear or Favour
                    </p>
                    <p className='text-[#706F6F] font-medium text-lg md:text-xl md:leading-8'>
                        {format(new Date(), "EEEE, MMM dd, yyyy")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Header;