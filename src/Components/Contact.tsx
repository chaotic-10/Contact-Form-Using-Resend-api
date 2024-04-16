import React, { useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_bhr5ftf';
    const templateId = 'template_u8jt1db';
    const userId = 'k3f3ldfIeioxtUDFu'; 

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'TrueDrax', 
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setCompany('');
        setMessage('');
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="my-20 mx-7">
      <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
        <div>
          <h3 className="text-sm text-gray-400 font-semibold">CONTACT US</h3>
          <h1 className="text-3xl font-extrabold mt-2 mb-3">Let's Talk</h1>
          <p className="text-sm text-gray-400 mt-1 mb-7">
            We will reach out to you within 24 hours
          </p>
          <div className="mt-2">
            <p className="text-sm font-bold text-gray-500 whitespace-nowrap">
              Don't like filling up forms? Email us directly at-
            </p>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <MdOutlineMail style={{ color: 'green' }} />
                </div>
                <a
                  target="_blank"
                  href="mailto:hi@truedax.io"
                  className="text-[#6c7279] text-sm ml-3"
                >
                  <strong>hi@truedax.io</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="ml-auto space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full border-b border-gray-300 py-2.5 px-4 text-sm focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border-b border-gray-300 py-2.5 px-4 text-sm focus:outline-none"
          />
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company Name"
            className="w-full border-b border-gray-300 py-2.5 px-4 text-sm focus:outline-none"
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help? Feel free to get in touch!"
            rows="2"
            className="w-full border-b border-gray-300 px-4 text-sm pt-2.5 focus:outline-none"
          ></textarea>
          <div className="relative">
            <button
              type="submit"
              className="text-white bg-[#53b873] hover:bg-blue-600 font-semibold rounded-[25px] text-sm px-4 py-2.5 flex items-center justify-center space-x-1"
            >
              <SiMinutemailer className="w-4 h-4" />
              <span>Get In Touch</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
