import React from 'react';
import '/home/zprogrammercode/React-portfolio-page/portfolio-page1/src/Components/Components.css';
import HeroSection from '../Components/HeroSection';
import PortfolioNavbar from '../Components/Navbar';
import AlertBar from '../Components/AlertBar';
import MultiCarousel from '../Components/ProjectCarousel';

const HomePage = () => {

   return( 
      <> 
      <div className='HomePageContainer container-fluid'>
         <AlertBar/>
         <PortfolioNavbar/>
         <HeroSection/>
         <h1 className='carousel1-title'>Ultra Shoe Collecting</h1>
         <MultiCarousel/>
         </div>
     </>)
      };

export default HomePage;

