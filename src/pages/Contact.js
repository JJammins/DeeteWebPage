import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <div className='contact-contents'>
        <h1>Contact Us</h1>
        <p>편안함을 느낄 수 있는 카페, 디에떼 에스프레소입니다.</p>

        <div className="contact-info">
          <h3>Our Address</h3>
          <p>대전 유성구 송강로 10, 송강동 187-12, 34009</p>

          <h3>Phone</h3>
          <p>070-4235-5700</p>

          <h3>Email</h3>
          <p>holic3410@naver.com</p>

          <h3>Opening Hours</h3>
          <p>Mon - Sun: 10:00 AM - 22:30 PM</p>
        </div>

        <div className="social-media">
          <h3>Follow Us</h3>
          <p>
            <a href="https://instagram.com/cafe">Instagram</a> | 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
