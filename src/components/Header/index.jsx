import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router';
import './header.css';

export default function Header() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
            <Container className='myclass'>
                <div>
                    <h1 className="navbar-brand">Sales&Purchase</h1>
                </div>

                <div classNameName='navbar navbar-expand-lg navbar-light'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav justify-content-between myclass">
                            <li className="nav-item p-4 active">
                                <NavLink to="/homepage">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item p-4">
                                <NavLink to="/products">
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item p-4">
                                <NavLink to="/cart">
                                    Cart
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </Container>
        </nav>


    )
}
