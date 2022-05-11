import React from 'react';
import DentalCare from '../DentalCare';
import MakeAppointment from '../MakeAppointment';
import Services from '../Services';
import Banner from './Banner';
import Info from './Info';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;