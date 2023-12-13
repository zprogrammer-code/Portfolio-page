import React from 'react';
import '/home/zprogrammercode/React-portfolio-page/portfolio-page1/src/Components/Components.css';
import HeroSection from '../Components/HeroSection';
import PortfolioNavbar from '../Components/Navbar';
import AlertBar from '../Components/AlertBar';

const HomePage = () => {

   return( 
      <> 
      <div className='HomePageContainer'>
         <AlertBar/>
         <PortfolioNavbar/>
         <HeroSection/>
         </div>
     </>)
      };

export default HomePage;

