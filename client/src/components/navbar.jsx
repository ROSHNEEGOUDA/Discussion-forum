import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  sticky-top ">
{/*       <NavLink className="navbar-brand" to="/">
        Community
      </NavLink> */}
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
         <NavLink className="nav-link ml-2" to="/dashboard">
          Community Page
        </NavLink>
      </button>

      <div className="collapse navbar-collapse row" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
{/*             <NavLink className="nav-link ml-3" to="/dashboard">
              Home
            </NavLink> */}
          </li>
          <li className="nav-item">
            <NavLink className="nav-link ml-2" to="/">
             Community Page
            </NavLink>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          {!user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users/login">
{/*                   Login */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users/register">
{/*                   Register */}
                </NavLink>
              </li>
            </React.Fragment>
          )}
{/*           {user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/me">
                  Hi {user.username}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users/logout">
                  LogOut
                </NavLink>
              </li>
            </React.Fragment>
          )} */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
