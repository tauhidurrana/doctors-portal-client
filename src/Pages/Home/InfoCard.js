import React from 'react';


const InfoCard = ({img, cardTitle, bgClass}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl text-white ${bgClass}`}>
            <figure><img className="pl-5" src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;