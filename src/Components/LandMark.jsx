import React from 'react';

const LandMark = React.forwardRef((props, ref) => {
    return (
      <div ref={ref} className="w-[50px] h-[50px] mx-auto animate-spin relative">
        <div className="absolute w-[20px] h-[20px] rounded-full bg-accent top-0"></div>
        <div className="absolute w-[20px] h-[20px] rounded-full bg-accent right-0 bottom-0"></div>
        <div className="absolute w-[20px] h-[20px] rounded-full bg-accent right-0"></div>
        <div className="absolute w-[20px] h-[20px] rounded-full bg-accent bottom-0"></div>
      </div>
    );
  });

export default LandMark;