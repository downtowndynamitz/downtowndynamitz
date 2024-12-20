import React, { useState } from 'react'; 
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const [successMessage, setSuccessMessage] = useState('');
    
      const handleChange = (e) => {
       
        setFormData({
             ...formData, 
             [e.target.name]: e.target.value 
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const serviceID = 'service_ku4fcml';
        const templateID = 'template_iegwks9';
        const userID = 'q7Dpl9lERuJTrB8ag';
        emailjs.send(serviceID, templateID, formData, userID) 
        .then((response) => { console.log('SUCCESS!', response.status, response.text); 
            setSuccessMessage('Your message has been sent successfully!'); 
        }, (err) => { 
            console.log('FAILED...', err); 
            setSuccessMessage('Failed to send your message. Please try again.'); 
        });
    
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };
    return (
        <div className='contact'>
            <h2>Contact Us</h2>
            <div className="contact-info">
                <p>We would love to hear from you! Here are the ways you can reach us:</p>
                <p><strong>General :</strong> <a href="mailto:downtowndynamitz@gmail.com">downtowndynamitz@gmail.com</a></p>
                <p><strong>Finance :</strong> <a href="mailto:girisirimullandram@gmail.com">girisirimullandram@gmail.com</a>, <a href="mailto:upender.cht@gmail.com">upender.cht@gmail.com</a></p>
            </div>
            
            <div  className="contact-form">
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>

                    <button type="submit">Send Email</button>
                </form>
                {successMessage && <p>{successMessage}</p>}
            </div>
        </div>
    );
};

export default Contact;

