import React from 'react';
import Alert from 'react-bootstrap/Alert'; 
import { Container } from 'react-bootstrap';
import "/home/zprogrammercode/React-portfolio-page/portfolio-page1/src/Components/Components.css";

 
function AlertBar() {
    return(
        <>
            <Alert varient="success" className=" alert" >
                <Container className='anouncement-content-wrapper'> 
                   <h2 className='alert-content-padding'> See what im working on </h2>
                    <button variant='dark' >
                       <a href="https://github.com/zprogrammer-code/ecommerce-ultra"> My Github </a>
                    </button>
                </Container>
            </Alert>
        </>
    )
};

export default AlertBar;