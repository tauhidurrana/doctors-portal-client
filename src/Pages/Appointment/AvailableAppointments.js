import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h4 className='text-center text-secondary font-bold mb-14'>Avaiblable Appointments: {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20'>
                {
                    services.map(service=><Service
                    key={service._id}
                    service = {service}
                    setTreatment = {setTreatment}
                    ></Service>)
                }
            </div>
            {/* treatment pass to booking model if condition true */}
            {treatment && <BookingModal treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;