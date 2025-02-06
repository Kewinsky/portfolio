import { Menu } from "lucide-react";
import { newsreader } from "../fonts";

const Navbar = () => {
  const routes = ["projects", "about", "contact"];

  return (
    <nav className={`navbar w-full text-center p-0 ${newsreader.className}`}>
      <div className="navbar-start">
        <a href="home" className="text-3xl p-0">
          portfolio.
        </a>
      </div>
      <div className="navbar-center">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-3xl">
            {routes.map((route) => (
              <li key={route} className="mx-14">
                <a href={`#${route}`} className="p-0">
                  {route}.
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <div className="lg:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
