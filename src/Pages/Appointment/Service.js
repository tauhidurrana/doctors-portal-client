import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card max-w-lg bg-base-100 shadow-xl ">
            <div class="card-body">
                <h2 class="card-title text-secondary justify-center">{name}</h2>
                <p className='text-center uppercase'>
                    {slots.length > 0 
                    ? <span>{slots[0]}</span>
                    :
                    <span className='text-red-500 uppercase text-sm'>No slot available</span>
                    }
                </p>
                <p className='text-center uppercase'>{slots.length} {slots.length>1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    <label htmlFor="booking-modal" 
                    disabled={slots.length ===0} 
                    onClick={() => setTreatment(service)}
                    class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;