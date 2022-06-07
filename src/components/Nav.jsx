import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="navBar">
      <Link to="/login" className="links">
        Login Page
      </Link>
      <Link to="/movie" className="links">
        Movie List Filter
      </Link>
      <Link to="/states" className="links">
        50 US States game
      </Link>
      <Link to="/hiddenX" className="links">
        Find the X game
      </Link>
      <Link to="/menu" className="links">
        Drop down menu
      </Link>
      <Link to="/messaging" className="links">
        Pseudo IM Service
      </Link>
    </nav>
  );
};
