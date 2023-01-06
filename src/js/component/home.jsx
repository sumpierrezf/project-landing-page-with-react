import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cartas from "./cartas.jsx";
import Footer from "./footer.jsx";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<>
	<Navbar/>
	<Jumbotron/>
	<div className="container text-center">
  <div className="row">
    <div className="col-lg-3 px-3 pt-2 pb-2">
	<Cartas/>
    </div>
    <div className="col-lg-3 px-3 pt-2 pb-2">
	<Cartas/>
    </div>
    <div className="col-lg-3 px-3 pt-2 pb-2">
	<Cartas/>
    </div>
	<div className="col-lg-3 px-3 pt-2 pb-2">
	<Cartas/>
    </div>
  </div>
</div>
	<Footer/>
	</>
		
	)
}

export default Home;
