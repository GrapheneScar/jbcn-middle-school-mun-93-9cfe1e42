
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      className={`nav-link relative ${isActive ? 'text-mun-purple-light' : ''}`}
      onClick={onClick}
    >
      <span className="relative z-10">{name}</span>
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className="h-0.5 bg-mun-purple-light absolute bottom-0 left-0 right-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30
          }}
        />
      )}
    </Link>
  );
};

export default NavLink;
