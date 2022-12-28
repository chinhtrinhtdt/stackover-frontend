import './header.css'

function Header() {
  return (
    <header className="p-2 bg-white position-fixed text-black border-bottom w-100">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <a href="/" className="mx-2">
            <img className='image-logo' src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" alt="stackoverflow" />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto justify-content-center mb-md-0">
            <li><a href="/#" className="nav-link px-2 py-1 text-secondary header__nav-link">About</a></li>
            <li><a href="/#" className="nav-link px-2 py-1 text-secondary header__nav-link">Products</a></li>
            <li><a href="/#" className="nav-link px-2 py-1 text-secondary header__nav-link">For Teams</a></li>
          </ul>

          <form className="mx-3 position-relative flex-fill">
            <i className="bi bi-search input-search-icon"></i>
            <input className="form-control form-control-sm input-search " type="text" placeholder="Search..." />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-primary me-2  btn-sm">Login</button>
            <button type="button" className="btn btn-primary  btn-sm">Sign-up</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header