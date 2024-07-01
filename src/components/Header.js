import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/logo.png";
export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link className="items" to="/cart">
        <span>Cart: 2</span>
      </Link>
    </header>
  );
};
