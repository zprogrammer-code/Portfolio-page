import React from 'react';
import '/home/zprogrammercode/React-portfolio-page/portfolio-page1/src/Components/Components.css';
import { Button } from 'react-bootstrap';



function HeroSection() {
    return(
        <>
        <div className='the-real-herosection-container'>
            
            
        
            <div className= 'hero_wrapper'>
            <iframe src="https://drive.google.com/file/d/1WFCAQmSPbIy10GzVNSBS-3MGq8tY-CnW/preview" width="640" height="480" allow="autoplay" title='myFace'></iframe>              
              <h1 className='namefont'> Hi, My name is Zachary Jacobs</h1>
                    <p>Im a fullstack software dveloper. My specialties
                     are Javascript/React.js & React Native,
                    Ruby/Rails and mySQL. Java, Ruby and Javascript
                    are the object oriented languages that I know</p>
                <Button href="Store" type='button' class="btn btn-primary">Shop Merch</Button>
            </div>
         
        </div>
        </>
    );
};

export default HeroSection;
