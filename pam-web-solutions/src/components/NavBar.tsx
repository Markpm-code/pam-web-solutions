import { NavLink, Outlet } from "react-router-dom";
import "./NavBar.css";
import Logo from "../assets/images/web solutions-logo.png";
const NavBar = () => {
  return (
    <div>
      <header className="bg-secondary p-3">
        <nav>
          <div className="logo">
            <NavLink to="/">
              <img className="img-fluid" src={Logo} alt="logo" />
            </NavLink>
          </div>

          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="services">Services</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
