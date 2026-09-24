import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    margin: "0 10px",
    color: isActive ? "red" : "white",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div className="bg-black p-5 flex justify-around items-center">
    <nav>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/about" style={linkStyle}>
        About
      </NavLink>

      <NavLink to="/services" style={linkStyle}>
        Services
      </NavLink>

      <NavLink to="/courses" style={linkStyle}>
        Courses
      </NavLink>

      <NavLink to="/gallery" style={linkStyle}>
        Gallery
      </NavLink>

      <NavLink to="/contact" style={linkStyle}>
        Contact
      </NavLink>

      <NavLink to="/help" style={linkStyle}>
        Help
      </NavLink>
    </nav>
    </div>
  );
};

export default Navbar;