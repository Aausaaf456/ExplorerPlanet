import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header1 = () => {
    return (
        <header className="bg-dark text-white p-3 sticky-top shadow">
            <div className="container d-flex justify-content-between align-items-center">
                <h2 className="fw-bold m-0">🌌 Planet Explorer</h2>
                <nav className="d-flex align-items-center">
                    <div className="dropdown me-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            Planets
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#mercury">Mercury</a></li>
                            <li><a className="dropdown-item" href="#venus">Venus</a></li>
                            <li><a className="dropdown-item" href="#earth">Earth</a></li>
                            <li><a className="dropdown-item" href="#mars">Mars</a></li>
                            <li><a className="dropdown-item" href="#jupiter">Jupiter</a></li>
                            <li><a className="dropdown-item" href="#saturn">Saturn</a></li>
                            <li><a className="dropdown-item" href="#uranus">Uranus</a></li>
                            <li><a className="dropdown-item" href="#neptune">Neptune</a></li>
                        </ul>
                    </div>
                    <a href="#about" className="text-light text-decoration-none me-3">About</a>
                    <a href="#contact" className="text-light text-decoration-none">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header1;
