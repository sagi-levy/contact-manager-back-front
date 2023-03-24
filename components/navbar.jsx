import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark"
        aria-label="Sixth navbar example"
      >
        <div className="container-fluid">
          <Link to="/"> Expand at xl</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample06"
            aria-controls="navbarsExample06"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-xl-0">
              <li className="nav-item">
                <NavLink to="about" className="nav-link" href="#">
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="my-contacts" className="nav-link" href="#">
                  My contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
