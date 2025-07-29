import React from 'react';

const PlaneArrowLeft = () => {
    return (
          
           <div className="border border-gray-300 rounded-[50%] w-8 h-8">
           <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth="1.5"
               stroke="currentColor"
               className="size-4 translate-x-2 translate-y-2 -rotate-135"
           >
               <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
               />
           </svg>
       </div>
    );
};

export default PlaneArrowLeft;