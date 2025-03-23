
import React from 'react';
import NavLink from './NavLink';
import { NavLinkWithSubmenu } from '../../hooks/useNavbarState';

interface SimpleNavLinkProps {
  link: NavLinkWithSubmenu;
  isActive: (path: string) => boolean;
}

const SimpleNavLink = ({ link, isActive }: SimpleNavLinkProps) => {
  return (
    <div className="relative">
      <NavLink
        name={link.name}
        path={link.path}
        isActive={isActive(link.path)}
        className="block px-4 py-2.5 text-left rounded-full hover:bg-white/5"
      />
    </div>
  );
};

export default SimpleNavLink;
