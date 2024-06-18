import React from 'react';
import ReachOutItems from './ReachOutItems';

const FrameComponent20 = () => {
  return (
    <div className="flex justify-center py-[40px] relative overflow-hidden">
      <section className="w-[1559px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1300:flex-wrap relative z-10">
        <ReachOutItems />
        <ReachOutItems />
        <ReachOutItems />
        <ReachOutItems />
      </section>
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 555"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M477 34.8661C348.133 -11.7168 212.569 -16.9996 0 52.2339V498.893C135.5 517.146 290 531.646 446.5 498.893C516.74 484.192 704.771 499.553 830.5 531.646C1019.92 579.996 1145.36 496.849 1336 531.646C1578.02 575.82 1746.5 550.646 1914.5 498.893V52.234C1866.8 74.5104 1506.79 -27.3153 1336 34.8661C1180.44 91.5007 1056.83 106.603 916 52.2339C715.2 -25.2869 620.097 86.5927 477 34.8661Z"
            fill="#EEEEEE"
          />
        </svg>
      </div>
    </div>
  );
};

export default FrameComponent20;
