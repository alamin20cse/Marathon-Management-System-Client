import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const HomeMain = () => {
     useEffect(()=>{
    
            document.title='Home';
          });



    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
            
            
        </div>
    );
};

export default HomeMain;