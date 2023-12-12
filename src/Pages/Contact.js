import React from 'react';
import ContactInfo from '/home/zprogrammercode/React-portfolio-page/portfolio-page1/src/Components/ContactForm/Contactinfo.js';
import PortfolioNavbar from '../Components/Navbar';

function ContactPage() {
    return(
        <> 
        <div className='HomePageContainer'>
        <PortfolioNavbar/>
         <ContactInfo/>
         </div>
        </>
    );
};

export default ContactPage