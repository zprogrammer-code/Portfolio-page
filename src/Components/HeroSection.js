import React from 'react';
import '/home/zprogrammercode/React-portfolio-page/portfolio-page1/src/Components/Components.css';



function HeroSection() {
    return(
        <>
        <div className='the-real-herosection-container'>
            
            
        
            <div className= 'hero_wrapper'>
            <iframe src="https://drive.google.com/file/d/1WFCAQmSPbIy10GzVNSBS-3MGq8tY-CnW/preview" width="450" height="480" allow="autoplay" title='myFace'></iframe>              
             <div className='info'>
              <h1 className='namefont'> Hi, My name is Zachary Jacobs</h1>
                    <p className='summary'>Im a fullstack software dveloper. My specialties
                     are <s className='txtdec'>Javascript/React.js & React Native,
                    Ruby/Rails and mySQL.</s> Java, Ruby and Javascript
                    are the object oriented languages that I know</p>
                    <p> I Transitioned into Software Engineering as an entrepreneur
                         to use old-world craftsmanship skills to problem solve and build modern solutions in the tech industry. Avid fitness buff.
                        Loves to create and simplify complex ideas.</p>
                    <h3>7193384333</h3>
                    <h3>zprogrammercode@gmail.com</h3>
                    <h3>Colorado Springs, CO 80909</h3>
                    <h2>Click on the M to send me an email
                    </h2>
            </div>
            </div>
        </div>
        </>
    );
};

export default HeroSection;
