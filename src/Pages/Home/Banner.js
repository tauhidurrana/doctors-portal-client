import React from 'react';
import MainButton from '../Shared/MainButton';
import chair from './../../assets/images/chair.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen px-12">
            <div class="hero-content flex-col lg:flex-row-reverse flex-1">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />

                <div class="flex-1">
                    <h1 class="text-5xl font-bold">Your new smile starts here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <MainButton>Get Started</MainButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;