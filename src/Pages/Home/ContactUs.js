import React from 'react';
import MainButton from '../Shared/MainButton';
import appointment2 from './../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${appointment2})`
        }} className=''>
            <div className='mb-5 py-8'>
                <h1 className='text-primary text-xl text-center'>Contact Us</h1>
                <h2 className='text-center text-3xl text-white'>Stay connected with us</h2>
            </div>

            <div className='flex flex-col items-center'>
                <input type="email" placeholder="Email Address" className="input w-full max-w-xs" />
                <input type="text" placeholder="Subject" className="input w-full max-w-xs" />
                <textarea className="textarea input w-full max-w-xs" placeholder="Your Messegae"></textarea>
                <MainButton>Submit</MainButton>
            </div>
        </section>
    );
};

export default ContactUs;