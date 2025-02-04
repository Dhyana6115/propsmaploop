function Header(){
    return(
        <>
   <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <a className="navbar-brand fw-bold text-danger" href="#">
          RED <span className="text-dark">& WHITE</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-danger" href="#">Home</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-danger" href="#" role="button" data-bs-toggle="dropdown" style={{ transition: "0.3s" }}>
                STD 10th & 12th
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-danger" href="#" data-bs-toggle="dropdown">
                Courses
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Web Development</a></li>
                <li><a className="dropdown-item" href="#">Data Science</a></li>
              </ul>
            </li>

            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-danger" href="#" data-bs-toggle="dropdown">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Our Mission</a></li>
                <li><a className="dropdown-item" href="#">Our Team</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link text-danger" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    

        </>
    )
}
export default Header;