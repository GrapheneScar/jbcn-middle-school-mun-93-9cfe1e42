import { Link } from 'react-router-dom';
import Logo from '../Logo';
const NavbarBrand = () => {
  return <Link to="/" className="flex items-center space-x-3">
      <Logo />
      <div className="text-white">
        <div className="text-2xl font-light">JBCN (Parel)</div>
        <div className="text-2xl font-bold tracking-wider">MUN</div>
      </div>
    </Link>;
};
export default NavbarBrand;