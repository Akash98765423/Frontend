import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>My Store</h2>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;