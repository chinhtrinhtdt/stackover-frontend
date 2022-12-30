import { Link } from 'react-router-dom';
import styles from './navbar.module.css'

function Navbar() {
  return (
    <nav className={`${styles.navbar} position-fixed h-100 border-end d-flex flex-column align-items-start justify-content-start`}>
      <ul className="list-unstyled ps-0 w-100">
        <li className="my-3 ps-2">
          <Link to='/#' className="link-dark" >Home</Link>
        </li>
        <li className="mb-1 ps-2">Public</li>
        <li className="mb-3 ps-2">
          <Link to='/#' className="link-dark " >
            <i className="bi bi-info-circle"></i>
            <span className="fw-bold ms-1">Questions</span>
          </Link>
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li className="ps-5 py-2"><Link to="/#" className="link-dark">Tags</Link></li>
            <li className="ps-5 py-2"><Link to="/#" className="link-dark">Users</Link></li>
            <li className="ps-5 py-2"><Link to="/#" className="link-dark">Companies</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
