import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar() {
  const pathCurrent = window.location.pathname;

  const navbarMenu = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/questions',
      name: 'Questions'
    },
    {
      path: '/tags',
      name: 'Tags'
    },
    {
      path: '/users',
      name: 'Users'
    },
    {
      path: '/companies',
      name: 'Companies'
    },
  ];

  const renderNavbarMenu = () => (
    navbarMenu.map((menu, index) => (
      <NavLink to={menu.path} className="link-dark" key={index} >
        <li className={`${pathCurrent === menu.path && styles.active} my-3 ps-1 py-2`} >
          {menu.name}
          {menu.path === '/questions' && <i className="bi bi-question-circle ms-1"></i>}
        </li>
      </NavLink>
    ))
  )

  return (
    <nav
      className={`${styles.navbar} position-fixed h-100 border-end d-flex flex-column align-items-start justify-content-start`}
    >
      <ul className="list-unstyled ps-0 w-100">
        {renderNavbarMenu()}
      </ul>
    </nav>
  );
}

export default Navbar;
