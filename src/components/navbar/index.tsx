import './navbar.css'

function Navbar() {
  return (
    <nav className="navbar position-fixed border-end left-sidebar">
      <ul className="list-unstyled ps-0 w-100">
        <li className="mb-3 ps-2">
          <a href='/#' className="link-dark" >Home</a>
        </li>
        <li className="mb-1 ps-2">Public</li>
        <li className="mb-3 ps-2">
          <a href='/#' className="link-dark " >
            <i className="bi bi-info-circle"></i>
            <span className="fw-bold ms-1">Questions</span>
          </a>
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li className="ps-5 py-2"><a href="/#" className="link-dark">Tags</a></li>
            <li className="ps-5 py-2"><a href="/#" className="link-dark">Users</a></li>
            <li className="ps-5 py-2"><a href="/#" className="link-dark">Companies</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
