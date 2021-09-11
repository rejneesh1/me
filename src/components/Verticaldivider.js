import React from 'react';

const Verticaldivider = () => {
  let info = [
    { name: 'location', value: 'Kerala,Bengaluru' },
    { name: 'mobile', value: '+91-7907405355' },
    { name: 'experience', value: '2.6 years' },
    { name: 'D.O.B', value: '08-Feb-1993' },
  ];
  return (
    <div className="capitalize">
      {info.map((i) => {
        return (
          <div className="flex items-center ">
            <p className="w-40 text-right">{i.name}</p>
            <span className="border border-pink-600 h-10 m-3"></span>
            <p className="w-40">{i.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Verticaldivider;
