import React from 'react';
import quote from './../../assets/icons/quote.svg'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id:1,
            name:'winson herrry',
            comments:'',
            place:'california'
        },
        {
            _id:2,
            name:'winson herrry',
            comments:'',
            place:'california'
        },
        {
            _id:3,
            name:'winson herrry',
            comments:'',
            place:'california'
        },
    ]
    return (
        <section className='mt-16'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='text-primary text-bold text-xl'>Testimonial</h2>
                    <h1 className='text-bold text-3xl'>What Our Patients Say</h1>
                </div>
                <div>
                    <img className='w-48' src={quote} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-14'>
                {
                    reviews.map(review=><Review
                    key={review._id}
                    review = {review}
                    ></Review>)
                }
            </div> 
        </section>
    );
};

export default Testimonial;