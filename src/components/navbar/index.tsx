import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar() {
  const pathName = window.location.pathname

  return (
    <nav className={`${styles.navbar} position-fixed h-100 border-end d-flex flex-column align-items-start justify-content-start`}>
      <ul className="list-unstyled ps-0 w-100">
        <NavLink to='/' className="link-dark" >
          <li className={`${pathName === '/' && styles.active} my-3 ps-1 py-2`} >
            Home
          </li>
        </NavLink>

        <li className={"mb-1 ps-1"}>Public</li>

        <NavLink to='/questions' className="link-dark" >
          <li className={`${pathName === '/questions' && styles.active} ps-1 py-2`}>
            <i className="bi bi-question-circle"></i>
            <span className="ms-1">Questions</span>
          </li>
        </NavLink>

        <NavLink to="/tags" className="link-dark" >
          <li className={`${pathName === '/tags' && styles.active} ps-4 py-2`}>
            Tags
          </li>
        </NavLink>

        <NavLink to="/users" className="link-dark"          >
          <li className={`${pathName === '/users' && styles.active} ps-4 py-2`}>
            Users
          </li>
        </NavLink>

        <NavLink to="/companies" className="link-dark" >
          <li className={`${pathName === '/companies' && styles.active} ps-4 py-2`}>
            Companies
          </li>
        </NavLink>
      </ul>

    </nav>
  );
}

export default Navbar;
