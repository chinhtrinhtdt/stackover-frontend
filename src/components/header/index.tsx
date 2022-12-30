import { Link } from 'react-router-dom'
import styles from './header.module.css'

function Header() {
  return (
    <header className={`${styles.header} p-2 bg-white position-fixed w-100 top-0 text-black border-bottom`}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <Link to="/" className="mx-2">
            <img className={styles.logo} src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" alt="stackoverflow" />
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto justify-content-center mb-md-0">
            <li><a href="/#" className={`${styles.link} nav-link px-2 py-1 text-secondary`}>About</a></li>
            <li><a href="/#" className={`${styles.link} nav-link px-2 py-1 text-secondary`}>Products</a></li>
            <li><a href="/#" className={`${styles.link} nav-link px-2 py-1 text-secondary`}>For Teams</a></li>
          </ul>

          <form className="mx-3 position-relative flex-fill">
            <i className={`${styles.searchIcon} bi bi-search`}></i>
            <input className={`${styles.searchInput} form-control form-control-sm`} type="text" placeholder="Search..." />
          </form>

          <div className="text-end">
            <button type="button" className={`${styles.ctButton} btn btn-outline-primary me-2  btn-sm`}>Login</button>
            <button type="button" className="btn btn-primary  btn-sm">Sign-up</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header