import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container ml-3">
          <Link className="navbar-brand font-bold text-red-100 hover:text-red-500" to="/">
            Text-Utills
          </Link>
          <div className="flex flex-wrap gap-10 ml-6 container">
            <Link className="nav-link text-white font-light hover:font-bold" to="/home">
              HOME
            </Link> 
            <Link className="nav-link text-white font-light hover:font-bold" to="/fa">
              FORMAT DATA
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
