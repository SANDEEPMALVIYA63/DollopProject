import React, { useState } from 'react';
import '../assets/styles/Sidebar.css';
import {Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button */}
      <button 
        className="toggle-btn btn primary position-absolute" style={{zIndex:"10"}}
        id='toggler'

        onClick={toggleSidebar}
      >
        { <FaBars />}
      </button>
      
      {/* Sidebar */}
      <div className={`overflow-hidden sidebar d-flex flex-column p-3 ${isOpen ? 'open' : ''}`}>
      <div className='text-end d-flex justify-content-end'>
        <button 
          className="toggle-btn btn primary bg-transparent text-white "
          id='toggler'
          onClick={toggleSidebar}
        >
          {'X'}
        </button>
      </div>
        <div className="logo-section">
          <h2 className="text-white">Candidate</h2>
        </div>
        <ul className="nav flex-column">
        <li className="nav-item">
            <Link className="nav-link text-white m-2" to="/Deshboard">
              <i className="bi bi-door-open"></i> 
              Deshboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white m-2" to="/Compains">
              <i className="bi bi-door-open"></i> 
              Compains
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white m-2" href="#" id="manage">
              <i className="bi bi-calendar" ></i> Tasks / Calendar
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white m-2" id="manage " to ="/EmailFunctionality" >
              <i className="bi bi-envelope" ></i> Email Functionality
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white m-2" to="/showUser">
              <i className="bi bi-door-open"></i> 
              Agency Room
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white m-2" to="/coordinator">
              <i className="bi bi-door-open"></i> 
              coordinator
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white m-2" href="#">
              <i className="bi bi-chat-left-text"></i> Chat
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white m-2" href="#">
              <i className="bi bi-geo"></i> Branches
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white m-2" to="/home">
              <i className="bi bi-person"></i> User
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
