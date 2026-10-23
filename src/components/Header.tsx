import { NavLink } from 'react-router';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header>
      <div className="brand">
        <img src={logo} alt="" width={32} height={32} />
        <h1>My blog</h1>
      </div>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/signin">Sign in</NavLink>
      </nav>
    </header>
  );
}

export default Header;
