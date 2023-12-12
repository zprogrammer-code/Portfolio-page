import React from 'react';
import '/home/zprogrammercode/React-portfolio-page/portfolio-page1/src/Components/Components.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactInfo = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();

      const serviceId = 'service_0kbpgqt';
      const templateId = 'template_h3k0k5f';
      const publicKey = 'CjwD5R7LCijrImeuC';

      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Zprogrammercode',
        message: message,
      };
  
      emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent succesfully', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email', error)
      })
    }
  
    return(
        <>
        <div className='the-real-herosection-container'>
        <Container className='contactContainer'>
       <h1 className='contact-title'> My Contact Info </h1>
       <ul className='contactContainer'>
        <li className='listitem'><s className='txtdec2'>Phone:</s> 719-338-4333</li>
        <li className='listitem'><s className='txtdec2'>Email:</s> Zprogrammercode@gmail.com</li>
        <li className='listitem'><s className='txtdec2'>Github:</s> zprogrammer-code</li>
        <li className='listitem'><s className='txtdec2'>Linkedin:</s> https://www.linkedin.com/in/zachary-jacobs-10b3351b5/</li>
        </ul>
        
        <form onSubmit={handleSubmit} className='emailform'>

      <label className='txtdec2'>Name</label>
      <input 
       type="text"
       placeholder='Your Name'
       value={name}
       className='forminput'
       onChange={(e) => setName(e.target.value)} 
       />

      <label className='txtdec2' >Email</label>
      <input 
       type="email" 
       name="user_email" 
       className='forminput'
       placeholder='Your Email Adress'
       onChange={(e) => setEmail(e.target.value)}
        />

      <label className='txtdec2'>Message</label>
      <textarea
      cols='30'
      rows='10'
      value={message}
      placeholder='message'
      className='forminput'
      onChange={(e) => setMessage(e.target.value)}

     />
      
      <button type="submit">Send Email</button>

    </form>
    </Container>
    </div>
        </>
    );
};

export default ContactInfo;