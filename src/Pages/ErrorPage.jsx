import React, { useEffect } from 'react';

const ErrorPage = () => {

     useEffect(()=>{
    
            document.title='Error';
          })
    return (
        <div>
            <h1>Error </h1>
            <h1>404 Not Found</h1>
            
        </div>
    );
};

export default ErrorPage;