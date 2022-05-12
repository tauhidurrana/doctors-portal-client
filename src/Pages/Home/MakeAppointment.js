import React from 'react';
import doctor from './../../assets/images/doctor.png';
import appointment from './../../assets/images/appointment.png';
import MainButton from '../Shared/MainButton';


const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} 
        className='flex justify-center items-center mt-20'>
            <div className='flex-1 hidden lg:block '>
                <img className='mt-[-110px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 pl-5 px-5'>
                <h3 className='text-primary py-1'>Appointment</h3>
                <h1 className='text-white text-3xl font-bold py-5'>Make Appointment Today</h1>
                <p className='text-white text-lg py-3 pb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <MainButton>Get Started</MainButton>
            </div>
        </section>
    );
};

export default MakeAppointment;