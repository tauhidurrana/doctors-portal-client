import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../Shared/Loading'

const AvailableAppointments = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    
    const formattedDate = format(date, 'PP');
    
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[formattedDate])
    return (
        <div>
            <h4 className='text-center text-secondary font-bold mb-14'>Avaiblable Appointments: {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20'>
                {
                    services?.map(service=><Service
                    key={service._id}
                    service = {service}
                    setTreatment = {setTreatment}
                    ></Service>)
                }
            </div>
            {/* treatment pass to booking model if condition true */}
            {treatment && <BookingModal 
            date={date}
            treatment={treatment}
            setTreatment ={setTreatment}
            refetch = {refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;