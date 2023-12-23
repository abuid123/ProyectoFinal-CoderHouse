import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <nav className="bg-black">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-white">
            <CartWidget />
          </div>
          <div className="flex items-center">
            <a className="text-xl font-semibold text-white" href="#">
              Home
            </a>
            <a className="text-xl font-semibold text-white mx-3" href="#">
              Products
            </a>
            <a className="text-xl font-semibold text-white" href="#">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};