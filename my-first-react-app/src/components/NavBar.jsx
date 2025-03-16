import { HashLink as Link } from "react-router-hash-link";  // Import HashLink for smooth scrolling
import Logo from "../assets/images/logo.png";  // Ensure the logo path is correct
import "../styles/NavBar.css"; // Make sure the correct path to your CSS file

const NavBar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-center">

        <div>
          <Link to="#home">  
            <img className="navbar-logo-img" src={Logo} alt="logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/#about">About</Link> {/* Link to About section */}
          </li>
          <li>
            <Link to="/#projects">Projects</Link> {/* Link to Projects section */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
