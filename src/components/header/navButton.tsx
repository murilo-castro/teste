'use client';

import { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MapsContext } from '../../contexts/MapsContext';

const NavButton = () => {
  const { isOpen, setIsOpen } = useContext(MapsContext);

  return (
    <button
      type="button"
      className="text-gray-500 md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <span className="text-4xl font-semibold mr-2 mt-1">x</span>
      ) : (
        <GiHamburgerMenu className="text-3xl mr-2 mt-1" />
      )}
    </button>
  );
};

export default NavButton;
