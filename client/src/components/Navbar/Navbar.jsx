import './StyleNavbar.css';
import { useState, useEffect } from 'react';
import React from 'react';

const Navbar = () => {
    const [user, setUser] = useState(null);
    const fallbackUser = { firstName: "Test" };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token'); // Get the token from local storage

                if (!token) {
                    // If no token, redirect to login
                    window.location.href = '/login';
                    return;
                }

                const response = await fetch('http://localhost:8008/api/me', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                } else {
                    // Redirect to login if there's an error
                    
                }
            } catch (error) {
                console.error('Error fetching user data:', error.message);
            }
        };

        fetchUserData();
    }, []); // Empty dependency array means it runs only once after the initial render.

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Navbar</a>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                ></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Welcome {user?.firstName || fallbackUser.firstName}</a>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input
                            className="form-control me-sm-2"
                            type="text"
                            placeholder="Search"
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
