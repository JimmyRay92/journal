import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          Journal
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/category">
              Select Category
            </Link>
            <Link className="nav-link" to="/entry/new">
              New Entry
            </Link>
            <Link className="nav-link" to="/index">
              Index
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
