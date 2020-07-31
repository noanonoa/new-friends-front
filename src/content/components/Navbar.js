import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">New Friends</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample07">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    {
                        props.isAuthed
                            ? <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/Main">Main</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/Requests">Requests</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Friends">Friends</NavLink>
                                </li>
                                <li className="nav-item">
                                    <span onClick={props.handleLogout} className="nav-link logout-link" to="/Login">Logout</span>
                                </li>
                            </ul>
                            : <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Signup">Sign up</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Login">Login</NavLink>
                                </li>
                            </ul>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;