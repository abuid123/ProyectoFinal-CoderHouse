import { CartWidget } from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className="bg-black">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to={'/'} className="text-xl font-semibold text-white">
            <CartWidget brandText="ECOMMERCE" />
          </Link>
          <div className="">
            <NavLink to={`/category/${1}`} className="text-white" >Celular</NavLink>
            <NavLink to={`/category/${2}`} className="text-white ml-6" >Tablet</NavLink>
            <NavLink to={`/category/${3}`} className="text-white ml-6" >Notebook</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};