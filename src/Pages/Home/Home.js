import React from 'react';
import Services from '../Services';
import Banner from './Banner';
import Info from './Info';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;