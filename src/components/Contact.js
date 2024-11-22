import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <h2>Contact Us</h2>
            <div className="contact-info">
                <p>We would love to hear from you! Here are the ways you can reach us:</p>
                <p><strong>General :</strong> <a href="mailto:downtowndynamitz@gmail.com">downtowndynamitz@gmail.com</a></p>
                <p><strong>Finance :</strong> <a href="mailto:girisirimullandram@gmail.com">girisirimullandram@gmail.com</a>, <a href="mailto:upender.cht@gmail.com">upender.cht@gmail.com</a></p>
            </div>
            
            <div className="contact-form">
                <h3>Send Us a Message</h3>
                <form action="/send-email" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
