
import { Link } from "react-router-dom";
export default function Header() {

  const logout = () => {
    window.localStorage.removeItem("email");
    window.location.reload();
    window.location.pathname = "/login";
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  About
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" href="#" to={"/dashbord"}>
                  Dashboard
                </Link>
              </li> */}
              { ! window.localStorage.getItem("token") ? 
                            <>
                            <Link to="/login" type="button" className="btn btn-outline-info mx-2">Login</Link> 
                            <Link to="/register" type="button" className="btn btn-outline-info">Register</Link>
                            </>
                            :
                            
                            <Link onClick={logout} type="button" className="btn btn-outline-info mx-2">log out</Link>
                            
                }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
