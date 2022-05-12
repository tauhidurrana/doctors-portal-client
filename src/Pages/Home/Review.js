import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem earum aspernatur, veritatis est vero error quam nesciunt? Doloribus, modi eligendi</p>

                <div className='flex items-center mt-6'>
                    <div class="avatar mr-4">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <div>
                        <h1 className='font-bold'>{review.name}</h1>
                        <p className='font-bold'>{review.place}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;