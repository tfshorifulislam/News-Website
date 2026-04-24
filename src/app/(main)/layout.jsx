import LatestNews from '@/components/latestNews/LatestNews';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';


const MainLayout = ({ children }) => {
    return (
        <div className='w-11/12 mx-auto max-w-480'>
            <Header />
            <LatestNews />
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;