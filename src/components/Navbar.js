import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1 className="title">Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/Category">Category</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
