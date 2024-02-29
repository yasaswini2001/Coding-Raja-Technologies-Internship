import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ loggedInUser, handleLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('Current URL:', location.pathname);
    const x = document.getElementById("lll");
    if (
      location.pathname === '/art' ||
      location.pathname === '/science' ||
      location.pathname === '/technology' ||
      location.pathname === '/cinema' ||
      location.pathname === '/design' ||
      location.pathname === '/food' || 
      location.pathname==='/write'
    ) {
      x.innerHTML = "Logout";
      x.setAttribute("onClick", dun);
    } else {
      x.innerHTML = "Login";
      x.removeAttribute("onClick");
      
      
    }
  }, [location.pathname]); // Include location.pathname in the dependency array to run the effect on URL changes

  function dun() {
    navigate('/');
  }

  return (
    <div className="navbar">
      <div className="logo">yasaswini</div>
      <div className="nav-links">
        <div className="left-links">
          <Link to="/art">Art</Link>
          <Link to="/science">Science</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/cinema">Cinema</Link>
          <Link to="/design">Design</Link>
          <Link to="/food">Food</Link>
        </div>
        <div className="right-links">
          <Link to="/write" className="write">Write</Link>
          <Link to="/login" id="lll">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
