import React from 'react';
import { SocialIcon } from 'react-social-icons';

function SocialMedia(props) {
  return (
    <div className="flex">
      <div className="p-2">
        <SocialIcon url="https://twitter.com/jaketrent" />
      </div>
      <div className="p-2">
        <SocialIcon url="https://linkedin.com/in/jaketrent" />
      </div>
    </div>
  );
}

export default SocialMedia;
