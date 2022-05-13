import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({date}) => {
    return (
        <div>
            <h4 className='text-center text-secondary font-bold'>Avaiblable Appointments: {format(date, 'PP')}</h4>
        </div>
    );
};

export default AvailableAppointments;