import React from 'react';
import SocialMedia from './SocialMedia';

function Header() {
  return (
    <nav className="bg-black flex justify-between p-3 items-center text-gray-300">
      <div className="font-fredoka text-3xl">R.Rejneesh Pillai</div>
      <div>
        <SocialMedia />
      </div>
    </nav>
  );
}

export default Header;
