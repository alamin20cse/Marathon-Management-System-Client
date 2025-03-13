import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="text-center">
                <div className="loading loading-spinner loading-lg"></div>
                <h1 className="mt-4">Loading...</h1>
            </div>
        </div>
    );
};

export default Loading;