
import React from "react"

const Navbar = function(){
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><strong>Start Bootstrap</strong></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#"><strong>Home</strong></a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Services</a>
        <a className="nav-link disabled">Contact</a>
      </div>
    </div>
  </div>
</nav>
    )
}
export default Navbar