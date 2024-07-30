import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../components/data/loading.json';

const Loading = () => {
    return (
      <div className="loading-container">
        <div className="lottie-wrapper">
          <Lottie animationData={loadingAnimation} loop={true} className='w-[30vw] absolute left-[35vw] ' />
        </div>
      </div>
    );
  };

export default Loading;