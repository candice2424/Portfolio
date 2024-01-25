import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuOverlay = ({ links }) => {
  return (
    <li key={index}>
      <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default MenuOverlay;
