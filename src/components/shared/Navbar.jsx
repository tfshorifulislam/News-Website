import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import avatar from '@/assets/user.png'
import NavLink from './NavLink';
const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row space-y-3 justify-center md:justify-between mt-2 md:mt-5 items-center'>
            <div className='hidden lg:flex'></div>
            <ul className='flex justify-center gap-3 text-[#706F6F] text-sm md:text-lg leading-8'>
                <li>
                    <NavLink href={'/'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink href={'/about'}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink href={'/career'}>
                        Career
                    </NavLink>
                </li>
            </ul>
            <div className='flex items-center justify-center gap-2'>
                <Image src={avatar} alt='user Avatar' width={41} height={41} />
                <button className='px-5 md:px-10 py-1 md:py-2  bg-[#403F3F] text-white font-semibold text-xl'>
                    <Link href={'/login'}>
                        Login
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;