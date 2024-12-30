import React, { useEffect } from 'react';
import Bannar from './Bannar';
import ExtraSection from './ExtraSection';
import MarathonHome from './MarathonHome';
import UpcomingMarathon from './UpcomingMarathon';

const Home = () => {
     useEffect(()=>{
    
            document.title='Home';
          })
    return (
        <div>
            <Bannar></Bannar>
          
            <MarathonHome></MarathonHome>
            <UpcomingMarathon></UpcomingMarathon>
            <ExtraSection></ExtraSection>
            
        </div>
    );
};

export default Home;