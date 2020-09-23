import React, { useEffect, useState } from 'react';
import MenuComponent from './MenuComponent';

const MenuContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = (evt) => {
      if (evt.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keyup', closeMenu, true);

    return () => window.removeEventListener('keyup', closeMenu);
  }, []);

  return <MenuComponent isOpen={isOpen} setIsOpen={setIsOpen} />;
};

export default MenuContainer;
