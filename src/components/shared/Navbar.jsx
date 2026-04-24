import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import avatar from '@/assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between mt-5 items-center'>
            <div></div>
            <ul className='flex justify-center gap-3 text-[#706F6F] text-lg leading-8'>
                <li>
                    <Link href={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={'/about'}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href={'/career'}>
                        Career
                    </Link>
                </li>
            </ul>
            <div className='flex items-center justify-center gap-2'>
                <Image src={avatar} alt='user Avatar' width={41} height={41} />
                <button className='px-10 py-2  bg-[#403F3F] text-white font-semibold text-xl'>
                    <Link href={'/login'}>
                        Login
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;