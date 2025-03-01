
import { Link } from 'react-router-dom';

interface NavLinkProps {
  name: string;
  path: string;
  isActive: boolean;
  onClick?: () => void;
}

const NavLink = ({ name, path, isActive, onClick }: NavLinkProps) => {
  return (
    <Link
      to={path}
      className={`nav-link ${isActive ? 'text-mun-purple-light after:scale-x-100' : ''}`}
      onClick={onClick}
    >
      {name}
    </Link>
  );
};

export default NavLink;
