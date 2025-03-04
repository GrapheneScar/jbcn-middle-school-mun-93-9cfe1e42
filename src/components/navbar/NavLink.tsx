
import { Link } from 'react-router-dom';

interface NavLinkProps {
  name: string;
  path: string;
  isActive: boolean;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ name, path, isActive, className = '', onClick }: NavLinkProps) => {
  return (
    <Link
      to={path}
      className={`${className} relative font-medium transition-colors duration-300 ${
        isActive 
          ? 'text-amber-300' 
          : 'text-white hover:text-amber-200'
      } ${isActive ? 'after:scale-x-100' : 'after:scale-x-0'} after:content-[''] after:absolute after:w-full after:h-0.5 
      after:bottom-0 after:left-0 after:bg-amber-300 after:origin-bottom-right 
      after:transition-transform after:duration-300 hover:after:scale-x-100 
      hover:after:origin-bottom-left`}
      onClick={onClick}
    >
      {name}
    </Link>
  );
};

export default NavLink;
