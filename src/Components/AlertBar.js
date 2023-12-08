import React from 'react';
import Alert from 'react-bootstrap/Alert'; 
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import "/home/zprogrammercode/React-portfolio-page/portfolio-page1/src/Components/Components.css";

 
function AlertBar() {
    return(
        <>
            <Alert varient="dark" href="#" className=" alert block-example border border-0 border-dark" >
                <Container className='anouncement-content-wrapper'> 
                   <h4 className='alert-content-padding'> See what im working on </h4>
                    <Button type="pill" >
                        My Github
                    </Button>
                </Container>
            </Alert>
        </>
    )
};

export default AlertBar;