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

  const renderNavbarMenu = navbarMenu.map(menu => {
    if (menu.path === "/") {
      return (
        <div key={menu.path}>
          <NavLink to={menu.path} className="link-dark" >
            <li className={`${pathCurrent === menu.path && styles.active} my-3 ps-1 py-2`} >
              Home
            </li>
          </NavLink>
          <li className={"mb-1 ps-1"}>Public</li>
        </div>
      )
    };

    if (menu.path === "/questions") {
      return (
        <NavLink to={menu.path} className="link-dark" key={menu.path} >
          <li className={`${pathCurrent === menu.path && styles.active} ps-1 py-2`}>
            <i className="bi bi-question-circle"></i>
            <span className="ms-1">{menu.name}</span>
          </li>
        </NavLink>)
    };

    return (
      <NavLink to={menu.path} className="link-dark" key={menu.path} >
        <li className={`${pathCurrent === menu.path && styles.active} ps-4 py-2`} >
          {menu.name}
        </li>
      </NavLink>)
  });

  return (
    <nav
      className={`${styles.navbar} position-fixed h-100 border-end d-flex flex-column align-items-start justify-content-start`}
    >
      <ul className="list-unstyled ps-0 w-100">
        {renderNavbarMenu}
      </ul>
    </nav>
  );
}

export default Navbar;
