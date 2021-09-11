import React from 'react';
import { SocialIcon } from 'react-social-icons';

function SocialMedia(props) {
  return (
    <div className="flex">
      <div className="p-2">
        <SocialIcon url="https://github.com/rejneesh1" bgColor="#fff9f95c"/>
      </div>
      <div className="p-2">
        <SocialIcon url="https://linkedin.com/in/jaketrent" bgColor="#fff9f95c"/>
      </div>
      <div className="p-2">
        <SocialIcon url="mailto:pillairejneesh@gmail.com" bgColor="#fff9f95c"/>
      </div>
    </div>
  );
}

export default SocialMedia;
