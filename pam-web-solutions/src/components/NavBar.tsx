import { NavLink, Outlet } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>PWS</h1>
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
